<script>
  let text = "<p>I fell in love</p>";
</script>

<style>
  [contenteditable] {
    padding: 1em;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 1em;
  }
</style>

<div contenteditable="true" bind:textContent={text} />
<div>{text}</div>
