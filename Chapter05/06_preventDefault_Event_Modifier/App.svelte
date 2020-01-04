<script>
function navigationHandler(){
	alert("we have stopped you navigation")
}
</script>
<a href="http://google.com/" on:click|preventDefault={navigationHandler}>Google</a>
