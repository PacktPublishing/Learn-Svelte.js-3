<script>
  import { onDestroy } from 'svelte'
	let time = new Date().toLocaleTimeString();
	let timer = setInterval(()=>{
		time = new Date().toLocaleTimeString();
	}, 1000);
	onDestroy(()=>{
		console.log('onDestroy called')
		clearInterval(timer);
		console.log(`Timer stopped at ${time}`)
	})
</script>
<h2>{time}</h2>
