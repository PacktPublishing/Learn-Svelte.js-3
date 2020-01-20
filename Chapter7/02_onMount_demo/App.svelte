
<script>
 import { onMount } from "svelte";
	let repo;
  onMount(()=>{
     fetch('https://api.github.com/repos/PacktPublishing/Learn-Svelte.js-3').then(response => response.json())
		.then(jsonData => {
			 repo  = jsonData 
			 console.log(repo)
		})
		.catch(err => {
			console.log(err)
		});
  });
</script>
<h2>Your Repository details are </h2>
<div class="card">
  {#if repo}
		<img src={repo.owner.avatar_url} alt="repo image"/>
    <div><strong>Name - </strong>{repo.name}</div>
		<div><strong>Owner - </strong>{repo.owner.login}</div>
		<div><strong>Description - </strong>{repo.description}</div>
  {:else}
    <p>Fetching data.....</p>
  {/if}
</div>
<style>
img{
		height: 100px;
    border-radius: 50%;
	}
	.card{
		box-shadow: 2px 2px 6px;
    padding: 1rem;
    width: 50%;
	}
</style>



