// Element.splice(target index, how many to remove or replace, "what to replace it with");

let fruits = ["apple", "banana", "cherry", "date"];

// Remove 1 item at index 1 (banana)
fruits.splice(1, 1); 
console.log(fruits); // ["apple", "cherry", "date"]

// Insert "blueberry" at index 1 (without deleting anything)
fruits.splice(1, 0, "blueberry");
console.log(fruits); // ["apple", "blueberry", "cherry", "date"]

// Replace "cherry" with "grape" (delete 1, insert 1)
fruits.splice(2, 1, "grape");
console.log(fruits); // ["apple", "blueberry", "grape", "date"]
