<script>
	import Parent from './Parent.svelte';
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>
<Parent on:message={handleMessage}/>
