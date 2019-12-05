// Rest operator use in arguments
function calculateArgLength(...args) {
    console.log(args)
    console.log(args.length)
}
calculateArgLength("1", "2", "3")
calculateArgLength("Svelte", "React", "Vue", "Angular")
