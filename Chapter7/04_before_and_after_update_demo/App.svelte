<script>
	import { beforeUpdate , afterUpdate  } from 'svelte'
	let policyAccepted = false
	let name 
	let scroll
	beforeUpdate(() => {
		scroll = policyAccepted
		console.log('the component is about to update');
	});
	afterUpdate(() => {
		if(scroll){
			const elem = document.querySelector(".container")
			elem.scrollTo(0,elem.scrollHeight)
		}
		console.log('the component is updated');
	});

</script>
<div class="container">
	<div><input type="checkbox" bind:checked={policyAccepted}> i have read and accept the investments policy</div>
	<p>
		Mutual Fund investments are subject to market risk. Please read the offer document carefully before investing’ says the disclaimer in the every advertisement of the mutual fund. The objective of this disclaimer is to meet a statutory requirement which is basically intended to communicate the risks that mutual fund schemes have as an investment option		
</p>. 
<input type="text" bind:value={name} placeholder="Enter your name"/> 
</div>
{#if name & policyAccepted}
<h3>Thanks {name} for accepting the investment policy</h3>{/if}
<style>
	div.container{
		height:100px;
		width:500px;
		overflow:auto;
		padding:1rem;
		border:1px solid #cdcdcd;
	}
</style>

