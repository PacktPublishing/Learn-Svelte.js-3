<script>
    import Card from './Card.svelte';
    let user ={
        imageUrl :'https://i.pravatar.cc/200?u=a042581f4e290267048',
        name:'Nikhil karkra',		
        role:'Full Stack developer'
    } 

</script>
<Card imageUrl={user.imageUrl} name={user.name} role={user.role}/>
<Card {...user}/>