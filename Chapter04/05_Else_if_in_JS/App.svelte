<script>
	let age = 10
	let status = ''
	$:if(age >19){
		status = 'Adult'
	} else if(age >10 && age <19){
			status = 'Teenager'			
	} else {
		status = 'Child'
	}
</script>
<h4>My age is {age} and my status is {status}</h4>
