<script>
let counter = 0
function counterHandler(){
	counter++
}
</script>
<h4>Count is {counter}</h4>
<button on:click|once={counterHandler}>
	Click for counter
</button>
