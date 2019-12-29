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
	let status = false
	let str =''
	$:if(status){
		str = 'Hurray !! you are Authorized for this application'
	} else {
		str = 'You are not Authorized for this application'
	}
	function statusHandler(){
		status = true
	}
</script>
<h4>{str}</h4>
{#if !status}
  <button class="btn" on:click={statusHandler}>Click here to authorized</button>
{/if}
