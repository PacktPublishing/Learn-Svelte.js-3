let a
let b
let sum
//function to set variable a value
function setValueOfA(val) {
    a = val
    sumHandler(a, b)
}

//function to set variable b value
function setValueOfB(val) {
    b = val
    sumHandler(a, b)
}

// function to set variable sum value
function sumHandler(a, b) {
    sum = a + b
}
setValueOfA(10)
setValueOfB(20)
console.log('First value of sum is ', sum)
setValueOfA(20)
console.log('Second value of sum is ', sum)