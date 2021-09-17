<script lang="ts">
  import Gallow from "./Gallow.svelte";
  import MissedLetters from "./MissedLetters.svelte";
  import Word from "./Word.svelte";

  let missedLetters: string[] = ["a", "B", "D", "E"];
</script>

<main>
  <MissedLetters {missedLetters} />
  <Gallow />
  <Word />
  <div class="rectangle" />
</main>
