//variable declaration
var author = 'Nikhil karkra'
function getName() {
    var author = "Ramkumar"
    console.log('Inside function author name is ', author) // Local scope
}
console.log('Outside function author name is ', author)  // Global scope
getName()