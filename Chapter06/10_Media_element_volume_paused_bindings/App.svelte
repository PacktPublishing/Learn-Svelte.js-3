<script>
	let volume =  0.2
	let paused =true
</script>
<div>
	<audio controls src=”https://s.mp3-send.com/stream/KvWBZB:RQMAsB” bind:volume={volume} bind:paused ={paused} >
</audio>
</div>
<label>
	volume  <input type="range" name="volumne" min="0" max="1" step="0.1" bind:value={volume}>
	{volume*100}%
</label>
<button on:click={()=>paused=!paused}>{paused ? 'Play':'Pause' }</button>
