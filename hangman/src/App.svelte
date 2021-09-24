<script lang="ts">
  import Gallow from "./Gallow.svelte";
  import MissedLetters from "./MissedLetters.svelte";
  import Word from "./Word.svelte";
  import PressedKey from "./PressedKey.svelte";
  import { onMount } from "svelte";

  let missedLetters: string[] = [];
  let uncover: number[] = [];
  let word: string = "igorigor";
  let haveUserWon: boolean = true;
  $: letters = word.toUpperCase().trim().split("");

  onMount(() => {});

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
</script>

<main>
  <MissedLetters {missedLetters} />
  <Gallow />
  {#if haveUserWon === undefined}
    <PressedKey
      on:keyPressed={({ detail: key }) => {
        checkIfKeyMatched(key);
      }}
    />
  {/if}
  <Word on:gameWon={() => (haveUserWon = true)} {letters} {uncover} />
  <div class="rectangle" />
  {#if haveUserWon != undefined}
    <div class="gameWon" class:gameWon--won={haveUserWon} class:gameWon--over={!haveUserWon}>
      <h1 class="gameWon__header">GAME {haveUserWon ? "WON" : "OVER"}</h1>
      <button
        on:click={() => {
          missedLetters = [];
          uncover = [];
          word = "Jacuś";
          haveUserWon = undefined;
        }}
        class="gameWon__btn">NEW WORD</button
      >
    </div>
  {/if}
</main>
