
const html = document.querySelector("html")
const select = document.querySelector("select")

document.body.style.padding = "10px"

const update = (bgColor, textColor) => {
     html.style.backgroundColor = bgColor;
     html.style.color = textColor;
}

select.addEventListener("change", () => {
    select.value === "black" 
    ? update("black", "white")
     : update("white", "black")
})