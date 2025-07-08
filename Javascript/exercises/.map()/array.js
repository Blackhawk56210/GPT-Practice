const numbers=[1, 2, 3, 4];

const doubled = numbers.map((num) => {
    return number * 2 
})
console.log(doubled)

const people = [
  { name: "Chris", age: 25 },
  { name: "Colby", age: 23 },
  { name: "Jordan", age: 17 }
];

const adult = people.filter((age) => {
    return person.age >= 18
})
console.log(adult)

const prices = [10, 25, 30]

const total = prices.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(total)

const dollars = [33, 55, 864, 15]

const wealth = dollars.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(wealth)

const products = [
  { name: "Shoes", price: 50, category: "clothing" },
  { name: "Hat", price: 20, category: "clothing" },
  { name: "Keyboard", price: 100, category: "electronics" },
  { name: "Monitor", price: 200, category: "electronics" },
];

const electronics = products.filter(product =>  product.category === "electronics")
.reduce((acc, curr) => {
    return acc + curr.price
}, 0)
console.log(electronics)