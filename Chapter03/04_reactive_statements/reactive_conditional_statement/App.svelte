<script>
	let counter = 0;
     $:if(counter%2 === 0){
		console.log('Counter is even with value ', counter)
	} else {
		console.log('Counter is even with value ', counter)
	}
	function clickHandler(){
		counter += 1
	}

</script>
<button on:click={clickHandler}>Click me</button>

