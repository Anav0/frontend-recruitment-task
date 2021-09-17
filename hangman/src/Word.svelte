<script lang="ts">
  export let word: string;

  $: letters = word.trim().split("");
</script>

<div class="word">
  <ul class="word__letters">
    {#each letters as letter}
      <li class="word__letter">{letter}</li>
    {/each}
  </ul>
</div>

<style type="scss">
  @import "./scss/main";

  .word {
    grid-area: word;
    z-index: 2;

    &__letters {
      display: flex;
      list-style: none;
    }
    &__letter {
      position: relative;
      background-color: $letterFoundBg;
      color: $letterFoundFg;
      margin: 0.2rem;
      padding: 0.5rem;
      border-radius: 5px;

      &::after {
        position: absolute;
        background-color: $letterCover;
        border-radius: 5px;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
