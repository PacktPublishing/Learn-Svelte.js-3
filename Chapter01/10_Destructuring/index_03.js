// destructuring to get remaining properties of an array
let obj = {
    name: "Nikhil",
    age: 29,
    role: "developer",
    language: "Svelte"
}
let { name, age, …other } = obj
console.log(other)
