<style>
	.innerBox{
		height:20px;
		width:300px;
		background:orange;
		padding:20px
	}
	.outerBox{
		height:100px;
		width:350px;
		background:lightblue;
		padding:20px
	}
</style>
<script>
	function outerFunc(){
	alert("outerFunc called")
}
function innerFunc(){
	alert("innerFunc called")
}
</script>
<div class="outerBox" on:click="{outerFunc}">DIV 2
  <div class="innerBox" on:click="{innerFunc}">DIV 1</div>
</div>
