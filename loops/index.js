const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

let cat = cats.map((string) => {
    return string.toUpperCase()
})
// console.log(cat)

const filtered = cat.filter((c) => {
    return c.startsWith("L")
})
console.log(filtered)