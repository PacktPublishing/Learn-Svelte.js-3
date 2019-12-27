<script>
	let evenNumber = [0,2,4,6,8,10];
	function clickHandler(){
		let newNumber = evenNumber[evenNumber.length-1]+2
		evenNumber.push(newNumber) // no assignment
	}
</script>

<button on:click={clickHandler}>Add even number</button>
<h1>{evenNumber}</h1>
