<style>
.btn {
  border: none;
  color: white;
  padding: 14px 28px;
  cursor: pointer;
}
.active {background-color: #4CAF50;} 
.inactive {background-color: #f44336;} 
</style>
<script>
	let isActive = true
</script>
<button class='btn {isActive ? 'active':'inactive'}'>Button</button>
