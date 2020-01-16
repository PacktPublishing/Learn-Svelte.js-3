<script>
let clientWidth
let clientHeight
let offsetWidth
let offsetHeight
</script>
<style>
div {
  height: 150px;width: 200px;padding: 10px; margin: 15px; border: 5px solid red; background:lightyellow;
}
</style>
<div bind:clientWidth={clientWidth} bind:clientHeight={clientHeight} bind:offsetWidth={offsetWidth} bind:offsetHeight={offsetHeight} >
 <b>Box Information:</b><br>
  Height: 150px<br> Width: 200px<br> padding: 10px<br>
  margin: 15px<br> border: 5px<br>
</div>
<p><b>clientWidth = {clientWidth}px</b></p> 
<p><b>clientHeight = {clientHeight}px</b></p>
<p><b>offsetWidth = {offsetWidth}px</b></p>
<p><b>offsetHeight ={offsetHeight}px</b></p> 