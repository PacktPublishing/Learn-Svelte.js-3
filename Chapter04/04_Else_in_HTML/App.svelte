<script>
  let status = false;
  function ageHandler() {
    status = !status;
  }
</script>

<style>
  .btn {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    background: #ff3e00;
  }
  h5 {
    color: red;
  }
</style>

{#if status}
  <h4>Welcome back to the application</h4>
  <h5>You have 10 new messages</h5>
  <button class="btn" on:click={ageHandler}>Logout</button>
{:else}
  <h4>You Must login to see the application</h4>
  <button class="btn" on:click={ageHandler}>login</button>
{/if}
