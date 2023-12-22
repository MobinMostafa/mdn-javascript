const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const list = document.querySelector("ul");


const createCalender = (days, choice) => {
    list.innerHTML = "";
    h1.textContent = choice;
    for(let i = 1; i <= days; i++){
         const listItem = document.createElement("li");
         listItem.textContent = i;
         list.appendChild(listItem)
    }
}

createCalender(31, "January");

select.addEventListener("change", () => {
    const choice = select.value;
    let days = 31;
    if(choice === "February"){
        days = 28;
    }else if(
        choice === "April" ||
        choice === "June" ||
        choice === "September" ||
        choice === "November"
        ){
            days = 30;
        }
    createCalender(days, choice)
})