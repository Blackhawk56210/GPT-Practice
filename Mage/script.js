console.log("Hello World");
console.log("Chat-GPT Progress");

// 1.
let myName = "Colby";
console.log(myName);

//2. i dont know how i would do this one
let a = 5;
let b = 10;
let temp;
temp = a;
a = b;
b = temp; 

// 3.
function isEven(number) {
    if (number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
};

// 4.
for (let i = 0; i <=10; i++) {
    console.log("Iteration = ", i);
}

// 5.
for (let i = 0; i <=20; i++) {
    console.log("Iteration = ", i);
    if (i % 3 == 0, i % 5 == 0) {
    console.log("FizzBuzz =", i);
    } else if (i % 3 == 0) {
        console.log("Fizz =", i);
    } else if (i % 5 == 0) {
        console.log("Buzz =", i);
    } else {
        console.log(i);
    }
};

// 6.

let name = { name: "Colby"};

function greetName(name) {
    return `Hello, ${name}`;
}

console.log(greetName("Colby"));

// 7. checking if a number is a perfect square
function square(num) {
    return num * num;
}

// 8. 
const arr = [1, 4, 5, 10, 55, 32, 100];

function findMax(arr) {
    console.log("Max value in array:", Math.max(...arr));
};

findMax(arr);

// 9.
function reverseArr(arr) {
    console.log("Reversed Array =", arr.reverse());
}

reverseArr(arr);


// 10.

let total = 0;
const sum = arr.map((num) => total += num);

const SumArray = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + curr
    }, 0);
}

console.log(SumArray(arr));

// 11. 
const person = {
    name: "Colby",
    age: 23,
    city: "Freeport",
    isStudent: true
};

console.log(person);

// 12.
for (const key in person) {
    console.log("Key in =", key);
    console.log("`person[${key}] value =", person[key]);
}