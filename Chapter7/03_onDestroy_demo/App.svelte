<script>
import Timer from './Timer.svelte'
let show= false	
</script>
     <button on:click={()=>show=!show}>{show? 'Stop Timer': 'Start    Timer'} </button>
{#if show}
<Timer/>
{/if}
