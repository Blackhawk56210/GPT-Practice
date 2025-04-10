// 1. create a function that takes a name and returns it reversed
// Hint: Use .split(), .reverse(), and .join().
let name = "Colby";

function mirrorName(name) {
    const reversedName = name.split('').reverse().join('');
    console.log("Reversed Name:", reversedName);
}

mirrorName("Colby"); 

// 2.You have an inventory list of items. Write a function to alphabetically sort and display them.
// Hint:Use .sort() and maybe .forEach() to display them.
const inventory = ["sword", "shield", "potion", "bow"];

function sortInventory(inventory) {
    console.log("Sorted Inventory:");
    inventory.sort(); // Sort the inventory alphabetically
    inventory.forEach(item => console.log(item)); // Display each item
}

sortInventory(inventory);

// 3. Write JS that changes the text inside an <h1> with the ID welcome when a button is clicked.
// Hint: Use document.getElementById() and .textContent

// JS
const greetBtn = document.getElementById('greetBtn');
const greet = document.getElementById('welcome');

if (greetBtn && greet) {
    greetBtn.addEventListener('click', () => {
        greet.textContent = 'Hello, brave coder!';
    });
}

// 4. Make a simple counter that increases a number every time a button is clicked.
let counter = 0; // Initialize the counter
const maxMana = 10;
const manaBtn = document.getElementById('manaBtn');
const manaDisplay = document.getElementById('mana') // Select the button by ID
const resetBtn = document.getElementById("resetBtn");


if (manaBtn && manaDisplay) {
    manaBtn.addEventListener("click", () => {
        if (counter < maxMana) {
            counter++;
            mana.textContent = counter;
        } else {
            alert("Mana is already at maximum!");
        }
    });
}

if (resetBtn && manaDisplay) {
    resetBtn.addEventListener("click", () => {
        counter = 0;
        manaDisplay.textContent = counter;
    });
}
// 4.2 add a reset button to mana
// 4.3 add button that caps mana

// 5.The following code is supposed to return the sum of two numbers but isn’t working. Fix it!

function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5));