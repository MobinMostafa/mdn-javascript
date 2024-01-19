// closure in javascript
// closure : A closure is a combination of a function bundled together with references to its surrounding state. closure are created every time a function is created at function creation time.

function outer() {
    let counter = 0
     function inner(){
        counter++
        console.log(counter)
    }
    return inner
}

const callFun = outer()

// callFun()
// callFun()
// callFun()


// 2 another example 

function outerScope (number) {
    let inner = () => {
        number++
        return number
     }
     return inner
}

//  console.log(outerScope())
//  console.log(outerScope())

let increment = outerScope(0)
// console.log(increment())
// console.log(increment())
// console.log(increment())


// 3. another example 

function fruits (){
    let newStr = []
    let fruit = ([...str]) => { 
        newStr.push(...str) 
        return newStr
        // console.log(newStr)
    }
    return fruit
}

let newFruit = fruits()

newFruit(["mango", "apple"])
newFruit(["orange"])
console.log(newFruit(["Lemon"]))