
function multiply (num1, num2) {
    let result = num1 * num2
    return result
}

function addition (num1, num2) {
    let result = num1 + num2
    return result
}

function sum (...num){
    let result = 0
    for (let n of num){
        result += n
    }
    return result
}

console.log(multiply(5,6))
console.log(multiply(4,5))

console.log(addition(20,30))

console.log(sum(2,3,4,10))
