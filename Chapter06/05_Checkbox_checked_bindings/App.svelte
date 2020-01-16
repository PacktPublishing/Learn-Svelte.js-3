<style>
	button{
		background:orange;
		color:white;
	}
	button:disabled{
		background:#cdcdcd;
	}
</style>
<script>
	let policy_accepted = false;
</script>
<label>
	<input type=checkbox id="policy_accepted" bind:checked={policy_accepted}>
	i have read and accept the privacy policy.
</label>

<button disabled={!policy_accepted}>Submit</button>
