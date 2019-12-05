// rest operator for assigning the rest of the items of the array
let arr = ["Svelte", "React", "Vue", "Angular"]
let [programing1, programing2, ...other] = arr
console.log(programing1) 
console.log(programing2)
console.log(other) 

