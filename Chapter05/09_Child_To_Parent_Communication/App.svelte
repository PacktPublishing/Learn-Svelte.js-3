<script>
import ModalComponent from './ModalComponent.svelte'
let showModal = false
</script>
<button class="btn success" on:click={()=>showModal = true}>Open Modal</button>
{#if showModal}
<ModalComponent
  headerText="Svelte Modal !!"
  bodyText="This Modal is a child component. Triggered from parent and on click of Close button it will dispatch an event to parent handler and that close the modal"
  on:closeEvent={()=>{showModal = false}}
></ModalComponent>
{/if}
