<script lang="ts">
  import Gallow from "./Gallow.svelte";
  import MissedLetters from "./MissedLetters.svelte";
  import Word from "./Word.svelte";

  let missedLetters: string[] = ["a", "B", "D", "E"];
  let word: string = "ptyś";
</script>

<main>
  <MissedLetters {missedLetters} />
  <Gallow />
  <Word {word} />
  <div class="rectangle" />
</main>
