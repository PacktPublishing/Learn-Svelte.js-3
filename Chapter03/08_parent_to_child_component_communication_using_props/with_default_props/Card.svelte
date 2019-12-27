<script>
  export let imageUrl = 'https://i.pravatar.cc/200?u=a042581f4e290267047';
  export let name = 'John Smith';
  export let role = 'Developer';
</script>
<div class="card">
  <img src={imageUrl} alt={name}>
  <h1>{name}</h1>
  <p>{role}</p>
</div>
<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 200px;
    font-family: arial;
    padding: 10px;
    text-align: center;
    margin:auto
 }
 p{
   color: grey;
   font-size: 18px;
  }
 img{
    width:100%
  }

</style>
