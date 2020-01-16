<script>
  import Child from "./Child.svelte";
  let textEntered;
</script>

<Child bind:value={textEntered} />
{#if textEntered}
  <p>
    Text enter by child is
    <b>{textEntered}</b>
  </p>
{/if}
