<script>
	let currentTime = 0;
</script>
<div>
	<audio controls src=”https://s.mp3-send.com/stream/KvWBZB:RQMAsB” bind:currentTime={currentTime}>
</audio>
</div>
<button on:click={()=>currentTime=50}>set currentTime to 50 sec</button>
