
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Enter you name")
    if(!myName){
        setUserName()
    }else{
        localStorage.setItem("name", myName)
        myHeading.textContent = `You are coll , ${myName}`
    }
  
}

if(!localStorage.getItem("name")){
    setUserName()
}else{
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `You are coll, ${storedName}`
}

myButton.onclick = () => {
    setUserName()
}