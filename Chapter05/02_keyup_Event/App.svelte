<script>
	let name=""
	function inputHandler(event){
		name=event.target.value
	}
</script>
{#if name.length>0}
<h3>My name is {name}</h3>
{/if}
<input type="text" on:keyup={inputHandler} placeholder="Enter you Name"/>
