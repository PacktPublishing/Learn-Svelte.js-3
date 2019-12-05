//Hoisting
function getName() {
  return name;
  var name = "Nikhil Karkra";
}
console.log(getName()); // undefined
