<!------------------>
<!-------Style------>
<!------------------>
<style>
.modal {
    display: block; position: fixed; z-index: 1; padding-top: 100px; 
    left: 0; top: 0; width: 100%; height: 100%; 
    overflow: auto;background-color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.4); 
}
.modal-content {
    background-color: #fefefe; margin: auto;
    padding: 20px;border: 1px solid #888; width: 80%;
}
.btn {
    border: none;color: white; padding: 14px 28px;font-size: 16px;cursor: pointer;
}
.danger { background-color: #f44336;} 
.danger:hover { background: #da190b;}
.text-right { text-align: right; }
</style>

<!------------------>
<!-----Javacript---->
<!------------------>
<script>
 import {createEventDispatcher} from 'svelte';
 const dispatch = createEventDispatcher()
 export let headerText;
 export let bodyText;
 function closeHandler() {
    dispatch('closeEvent')
  }
</script>

<!--------------->
<!-----Markup---->
<!--------------->
<div id="myModal" class="modal">
 <div class="modal-content">
  <header>
   <strong>{headerText}</strong>
  </header>
  <p>{bodyText}</p>
  <footer class="text-right">
 <button class="btn danger" on:click={closeHandler}>Close</button>
 </footer>
 </div>
</div>
