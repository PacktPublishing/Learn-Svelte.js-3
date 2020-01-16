<style>
[contenteditable] {
 padding: 0.5em; border: 1px solid #eee; border-radius: 4px;
}
</style>
<script>
let text = '<p>I fell in love</p>';
</script>
<div contenteditable="true" bind:innerHTML={text}></div>
<div>{text}</div>
