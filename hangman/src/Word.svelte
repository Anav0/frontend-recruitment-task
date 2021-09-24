<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let letters: string[];
  export let uncover: number[];
  export let isGameOver: boolean;

  $: {
    if (uncover.length == letters.length) dispatch("gameWon");
  }
</script>

<div class="word">
  <ul class="word__letters">
    {#each letters as letter, i}
      <li class="word__letter" class:word__letter--uncover={uncover?.includes(i) || isGameOver}>{letter}</li>
    {/each}
  </ul>
</div>

<style type="scss">
  @import "./scss/main";

  .word {
    grid-area: word;
    place-self: end center;
    z-index: 2;

    &__letters {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }
    &__letter {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;

      &--uncover:after {
        background-color: transparent !important;
      }
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
