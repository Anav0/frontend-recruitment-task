<script lang="ts">
  export let missedLetters: string[];
</script>

<div class="missedLetters">
  <span class="missedLetters__caption">you missed:</span>
  <ul class="missedLetters__letters">
    {#each missedLetters as letter}
      <li class="missedLetters__letter">{letter}</li>
    {/each}
  </ul>
</div>

<style type="scss">
  @import "./scss/main";

  .missedLetters {
    grid-area: missed;

    &__caption {
      text-transform: uppercase;
    }
    &__letters {
      list-style: none;
      display: flex;
    }
    &__letter {
      padding: 0.2rem;
      text-transform: capitalize;
      color: $missedLettersColor;
    }
  }
</style>
