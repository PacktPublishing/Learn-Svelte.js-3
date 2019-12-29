<script>
  let age = 15;
</script>

{#if age > 19}
  <h4>Your age is {age} and you are Adult</h4>
{:else if age > 10 && age < 19}
  <h4>Your age is {age} and you are Teenager</h4>
{:else}
  <h4>Your age is {age} and you are Child</h4>
{/if}
