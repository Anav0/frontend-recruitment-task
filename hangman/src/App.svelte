<script lang="ts">
  import Gallow from "./Gallow.svelte";
  import MissedLetters from "./MissedLetters.svelte";
  import Word from "./Word.svelte";

  let missedLetters: string[] = [];
  let word: string = "ptyś";
  let pressedKey = "";

  function handleKeydown(e) {
    if (e.code.includes("Key")) {
      pressedKey = e.key.toUpperCase();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<main>
  <MissedLetters {missedLetters} />
  <Gallow />
  <PressedKey>{pressedKey}</PressedKey>
  <Word {word} />
  <div class="rectangle" />
</main>
