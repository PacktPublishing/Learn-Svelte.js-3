//spread operator in a function call
function totalSum(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3 + num4)
}
let numbers = [1, 2, 3, 4]
totalSum(...numbers)
