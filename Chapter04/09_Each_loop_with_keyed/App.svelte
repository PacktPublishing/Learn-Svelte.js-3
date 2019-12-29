<script>
  import Movie from "./Movie.svelte";
  let moviesList = [
    { id: 1, name: "The Shawshank Redemption" },
    { id: 2, name: "The Godfather" },
    { id: 3, name: "The Dark Knight" },
    { id: 4, name: "12 Angry Men" },
    { id: 5, name: "Schindler List" }
  ];
  function deleteHandler() {
    moviesList = moviesList.slice(1);
  }
</script>

<button on:click={deleteHandler}>Delete Movie from start</button>

<!--{#each moviesList as item}-->
{#each moviesList as item (item.id)}
  <Movie data={item} />
{/each}
