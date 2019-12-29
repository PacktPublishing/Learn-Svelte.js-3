<style>
.btn {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    background: #ff3e00;
}
</style>
<script>
	let str = 'Please sign in'
	let status = "sign-out"
	let btn = 'Sign in'
	$: if (status === 'sign-in') {
		str = 'Signed in successfully'
		btn = 'Sign out'
	}
	function loginHandler(){
		status = 'sign-in'
	}
</script>
<h4>{str}</h4>
<button on:click={loginHandler} class="btn">{btn}</button>
