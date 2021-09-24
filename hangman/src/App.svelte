<script lang="ts">
  import Gallow from "./Gallow.svelte";
  import MissedLetters from "./MissedLetters.svelte";
  import Word from "./Word.svelte";
  import PressedKey from "./PressedKey.svelte";
  import { onMount } from "svelte";

  let missedLetters: string[] = [];
  let uncover: number[];
  let word: string = "igorigor";
  $: letters = word.toUpperCase().trim().split("");

  onMount(() => {
    uncover = new Array(letters.length);
  });

  function checkIfKeyMatched(key: string) {
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
  <PressedKey
    on:keyPressed={({ detail: key }) => {
      checkIfKeyMatched(key);
    }}
  />
  <Word {letters} {uncover} />
  <div class="rectangle" />
</main>
