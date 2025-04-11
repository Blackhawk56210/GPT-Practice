// console.log() examples
console.log("Hello World");
console.log(2+2);

// variables examples
const age = 25;
let name = "Joel";
name = "Haru";
console.log(name, age);

const hobby = "coding";
let experience = 2;
experience = 5;
console.log(hobby, experience);

// functions examples
function add(nums1,num2){
  
  return nums1 + num2;
}
console.log(add(2,4));


const muiply = (nums1,nums2) => {
  return nums1 * nums2
}
console.log(muiply(2,8))

const multiply = (a, b) => a * b; 
console.log(multiply(5,10));

const division = (a,b) => a / b;
console.log(division(10,2));

const subtraction = (a,b) => a - b;
console.log(subtraction(30, 2));


// event listeners examples
const btn = document.getElementById("clickMe")
// document.querySelector()
// document.querySelectorAll()

btn.addEventListener("click", () => {
  alert("This has been clicked")
})

//string = "Hello World"
//number = 10
//boolean = false
//array   = [1,2,3,4,5]
// object = {name: "Joel", age: 25}
// null = null
// undefined = undefined


// data types examples


// accessing HTML elements and using alert on click