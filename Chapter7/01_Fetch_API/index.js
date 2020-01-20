
function serviceHandler(){
    fetch('https://api.github.com/repos/PacktPublishing/Learn-Svelte.js-3').then(res => res.json())
    .then(response => {
    console.log(response)
    })
    .catch(err => {
        console.log(err)
    });
    }
serviceHandler()