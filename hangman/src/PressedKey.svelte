<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let pressedKey = "";
  let isProcessing = false;

  function handleKeydown(e) {
    if (isProcessing) return;

    if (e.code.includes("Key")) {
      pressedKey = e.key.toUpperCase();
      dispatch("keyPressed", pressedKey);
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="key">{pressedKey == "" ? "Press key" : pressedKey}</div>

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
