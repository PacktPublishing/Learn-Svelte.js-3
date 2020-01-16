<script>
	let username = '';
	function inputHandler(event){
		username = event.target.value
	}
</script>
<input type="text" id="username" placeholder ="Type your username" value={username} on:input={inputHandler}>
<h4>{username}</h4>
