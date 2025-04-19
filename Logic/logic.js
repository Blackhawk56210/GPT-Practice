console.log("hello world");

// Write a function that takes in a price and the amount of money given, 
// and returns the change in dollars.
let change = paid - price;
function getChange() {
    // add some meath logic
    if (change < 0) {
        alert("Not enough Money!");
    };
}

getChange(2.50, 5);  //2.5;
getChange(3, 3);  //0;
getChange(4, 2);  //"Not enough money!";