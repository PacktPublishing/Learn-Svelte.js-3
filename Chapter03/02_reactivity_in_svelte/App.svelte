<script>
	let counter = 0;
	let counterSquare = counter*counter;
	function clickHandler(){
		counter += 1
	}
</script>
<button on:click={clickHandler}>Click me</button>
<div>Square of {counter} is {counterSquare}</div>
<div>You have clicked {counter} times</div>
