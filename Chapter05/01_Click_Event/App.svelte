<script>
	let counter = 0
	function countHandler(){
		counter++
	}
</script>

<h4>Counter: {counter}</h4>
<button on:click={countHandler}>
	Click here to Increment the counter
</button>
