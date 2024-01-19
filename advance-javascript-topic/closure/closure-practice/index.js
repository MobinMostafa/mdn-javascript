function init() {
    var name = "Mobin"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
     return displayName;
  }
  let result = init();
 
//   result()
 

function makeAdd (x) {
    return function (y){
         return x + y
    }
}

let add5 = makeAdd(5)
let add10 = makeAdd(10)

console.log(add5(5))
console.log(add10(10))