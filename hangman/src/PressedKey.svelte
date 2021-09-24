<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let pressedKey = "";
  let isProcessing = false;
  let isVisible = true;

  function handleKeydown(e) {
    if (isProcessing) return;

    if (e.code.includes("Key")) {
      isProcessing = true;
      isVisible = false;
      setTimeout(() => {
        pressedKey = e.key.toUpperCase();
        isVisible = true;
        setTimeout(() => {
          isVisible = false;
          dispatch("keyPressed", pressedKey);
          isProcessing = false;
        }, 800);
      }, 200);
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<div>
  {#if isVisible}
    <div out:fly={{ y: -100, duration: 300 }} in:fly={{ y: 100, duration: 300 }} class="key">
      {pressedKey == "" ? "Press key" : pressedKey}
    </div>
  {/if}
</div>

<style type="scss">
  @import "./scss/main";

  .key {
    color: $pressedKeyColor;
    z-index: 2;
    font-size: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
