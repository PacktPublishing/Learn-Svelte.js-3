<script>
	let country = 'Australia'
	function changeHandler(event){
		country = event.target.value
	} 
</script>
{#if country}
<h4>You have selected the {country}</h4>
{/if}
<select on:change={changeHandler}>
	<option value="Australia">Australia</option>
	<option value="India">India</option>
	<option value="United States">United States</option>
</select>
