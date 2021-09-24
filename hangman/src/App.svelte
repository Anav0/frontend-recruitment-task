<script lang="ts">
  import Gallow from "./Gallow.svelte";
  import MissedLetters from "./MissedLetters.svelte";
  import Word from "./Word.svelte";
  import PressedKey from "./PressedKey.svelte";
  import { onMount } from "svelte";
  import api from "./api";

  let missedLetters: string[] = [];
  let uncover: number[] = [];
  let word: string = "";
  let haveUserWon: boolean = undefined;
  let errorMsg: string = "";

  $: letters = word.toUpperCase().trim().split("");

  $: {
    if (missedLetters.length == 11) haveUserWon = false;
  }

  onMount(fetchNewWord);

  function checkIfKeyMatched(key: string) {
    if (haveUserWon) return;

    let indexes = letters.map((_, i) => i).filter((i) => letters[i] == key);

    if (indexes.length === 0 && !missedLetters.includes(key)) {
      missedLetters.push(key);
      missedLetters = [...missedLetters];
    } else if (!uncover.includes(indexes[0])) {
      uncover = [...uncover, ...indexes];
    }
  }
  async function fetchNewWord() {
    try {
      const response = await api.words.random();
      const words = await response.json();
      word = words[0];
    } catch (error) {
      errorMsg = error.message;
    }
  }
</script>

<main>
  <MissedLetters {missedLetters} />
  <Gallow numberOfMisses={missedLetters.length} />
  {#if haveUserWon === undefined}
    <PressedKey
      on:keyPressed={({ detail: key }) => {
        checkIfKeyMatched(key);
      }}
    />
  {/if}
  <Word on:gameWon={() => (haveUserWon = true)} {letters} {uncover} />
  <div class="rectangle" />
  {#if errorMsg != ""}
    <h1 class="errorMsg">{errorMsg}</h1>
  {/if}
  {#if haveUserWon != undefined && errorMsg === ""}
    <div class="gameWon" class:gameWon--won={haveUserWon} class:gameWon--over={!haveUserWon}>
      <h1 class="gameWon__header">GAME {haveUserWon ? "WON" : "OVER"}</h1>
      <button
        on:click={async () => {
          missedLetters = [];
          uncover = [];
          await fetchNewWord();
          haveUserWon = undefined;
        }}
        class="gameWon__btn">NEW WORD</button
      >
    </div>
  {/if}
</main>
