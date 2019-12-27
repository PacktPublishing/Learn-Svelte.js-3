<script>
	let counter = 0;
	$:{
		console.log('Your counter value is')
		console.log(counter)
    }

	function clickHandler(){
		counter += 1
	}
</script>
<button on:click={clickHandler}>Click me</button>
<div>You have clicked {counter} times</div>
