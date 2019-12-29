<style>
.btn {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
	background:#ff3e00;
}
</style>
<script>
	 let showText = false
	 function showHandler(){
		 showText = true
	 }
</script>
<button class="btn" on:click={showHandler}>Click me to show text</button>
{#if showText}
 <h4>Hurray!! you have successfully run the if block in markup</h4>
{/if}
