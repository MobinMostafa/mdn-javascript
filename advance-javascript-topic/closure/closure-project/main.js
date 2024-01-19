//********** */ 1. example of closure **********


// function makeSize(size) {
//    return function () {
//     document.body.style.fontSize = `${size}px`
//    }
// }

// const size12 = makeSize(24)


// document.querySelector("#size-12").onclick = size12


// document.querySelector("#size-14").addEventListener("click", () => {
//     document.querySelector("h1").style.fontSize = "30px"
// });


// 2 another example of closure

const makeCounter = (function(){
    let privetCounter = 0

    function changeBy(val){
        privetCounter += val
    }
    return {
        increment (){
            changeBy(1)
        },
        decrement () {
             changeBy(-1)
        },
        value () {
            return privetCounter
        }
    }
})();
console.log(makeCounter.value())

// makeCounter.increment()
// makeCounter.increment()

document.querySelector("#size-16").addEventListener("click", () => {
    makeCounter.increment()
    document.querySelector("h2").innerText = makeCounter.value()
})

document.querySelector("#size-14").addEventListener("click", () => {
   if (makeCounter.value() > 0){
    makeCounter.decrement()
    document.querySelector("h2").innerText = makeCounter.value()
   }
})


// console.log(makeCounter.value())