<script>
	let counter = 0
	let name =""
</script>
<!-- Below code is an  example Using inline function without event parameter-->
<h4>Counter: {counter}</h4>
<button on:click={()=>counter++}>
	Click 
</button>

<!-- Below code is an example Using inline function with event parameter-->
<div>
	{#if name.length>0}
<h3>My name is {name}</h3>
{/if}
<input type="text" on:keyup={(event)=>name=event.target.value} placeholder="Enter you Name"/>
</div>
