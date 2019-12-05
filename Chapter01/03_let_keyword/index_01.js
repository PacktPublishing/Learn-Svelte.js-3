//let keyword with scopes

let globalName = "Nikhil"; // global scope
if (true) {
  let localName = "Ram"; // block scope only accessible inside if statement
  console.log(globalName);
  console.log(localName);
}
console.log(globalName);
console.log(localName);
