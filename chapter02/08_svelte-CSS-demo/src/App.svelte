
<style>
  h1 {
    text-align: center;
    padding: 1em;
    color: orange;
    margin: 0 auto;
    background: #5c2e86;
  }
  .green {
    color: green;
    text-align: center;
  }
  p {
    font-size: 20px;
    color: red;
    text-align: center;
  }
  :global(body) {
    /* this will apply to <body> */
    background: yellow;
  }
</style>


<div>
  <h1>Svelte styles with CSS</h1>
  <p>I am enjoying learning</p>
  <p class="green">Svelte css is scoped by default</p>
</div>
