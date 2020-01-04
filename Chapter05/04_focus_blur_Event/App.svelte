<script>
	let STATUS = ''
	function focusHandler(){
		STATUS = 'FOCUS'
	} 
	function blurHandler(){
		STATUS = 'BLUR'
	}
</script>
{#if STATUS === 'FOCUS'}
<h4>Focus triggered</h4>
{:else if STATUS === 'BLUR'}
<h4>Blur triggered</h4>
{:else}
<h4>Click inside the input field to focus</h4>
{/if}

<input type="text" on:focus={focusHandler} on:blur={blurHandler}/>
