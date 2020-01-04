<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function msgHandler() {
    dispatch("message", {
      text: "Your event message received!"
    });
  }
</script>

<button on:click={msgHandler}>Forward your event</button>
