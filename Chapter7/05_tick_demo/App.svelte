<script>
	import {onMount, tick} from 'svelte'
	let size= 100;
	let boxHeight
	onMount(()=>{
		boxHeight = document.querySelector('#box').clientHeight
	})
	async function sizeHandler(){
		size+= 10
		await tick()
		boxHeight = document.querySelector('#box').clientHeight
	}
</script>
<button on:click={ sizeHandler }>Increase height by 10</button>
<div class='container'>
  <div id="box" style="height:{size}px"></div>
</div>
<h3>size is {size} pixel</h3>
<h3>boxHeight is {boxHeight} pixel</h3><style>
	.container{
		display:flex;
		justify-content:center;
		height:50vh;
	  align-items: center;
		color:white;
	}
	#box{
		width:100px;
		background:red;
	}
</style>
