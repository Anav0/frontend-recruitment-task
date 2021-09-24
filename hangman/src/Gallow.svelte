<script lang="ts">
  import { Piece } from "./piece";
  import { fade, fly } from "svelte/transition";

  export let numberOfMisses: number;

  const pieces: Piece[] = [];
  const names: string[] = ["bar", "head", "neck", "corpus", "ra", "la", "rh", "lh", "rl", "ll", "rf", "lf"];

  for (let i = 0; i < names.length; i++) {
    pieces.push(new Piece(names[i]));
  }
</script>

<div class="gallow">
  {#each pieces as piece, i}
    {#if i <= numberOfMisses}
      <img transition:fade class={`gallow__${piece.name}`} src={piece.path} />
    {/if}
  {/each}
</div>

<style type="scss">
  @import "./scss/main";

  .gallow {
    grid-area: gallow;
    position: relative;

    &__bar {
      left: -166px;
      top: 0px;
    }
    &__head {
      left: 50px;
      top: -5px;

      z-index: 3;
    }
    &__neck {
      left: 124px;
      top: 128px;
      z-index: 2;
    }
    &__corpus {
      z-index: 3;
      left: 95px;
      top: 124px;
    }
    &__la {
      left: 45px;
      top: 137px;
      z-index: 2;
    }
    &__lf {
      left: 69px;
      top: 310px;
    }
    &__lh {
      left: 65px;
      top: 209px;
    }
    &__ll {
      left: 88px;
      top: 194px;
    }
    &__ra {
      left: 121px;
      top: 135px;
      z-index: 2;
    }
    &__rf {
      left: 140px;
      top: 311px;
    }
    &__rh {
      left: 197px;
      top: 207px;
    }
    &__rl {
      left: 124px;
      top: 194px;
    }
  }
  img {
    position: absolute;
    transform: scale(0.5);
  }
</style>
