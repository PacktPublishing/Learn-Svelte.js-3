<script>
	let movies = [
		'The Shawshank Redemption',
		'The Godfather',
		'The Dark Knight',
		'12 Angry Men',
		'Schindler List'
	]
</script>
<h3>Top 5 Movies based on IMDB rating.</h3>
{#each movies as movie, index}
<p>{index+1} - {movie}</p>
{/each}
