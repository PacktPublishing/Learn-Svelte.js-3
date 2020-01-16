<script>
	function numberHandler(event){
		let data = event.target.value
		console.log(typeof data)
		console.log(data+2)
	}
</script>
<input type="number" id="orignal_price" on:input={numberHandler}>
