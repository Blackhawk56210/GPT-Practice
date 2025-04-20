console.log("hello world");

// Write a function that takes in a price and the amount of money given, 
// and returns the change in dollars.

// You don’t define price and paid inside the function
// they’re passed in when someone calls the function.

/* Think of writing functions like a vending machine 
It doesn't know what you're gonna put in yet — you're just designing the machine.
*/
function getChange(price, paid) {
    let change = paid - price;
    if (change < 0) {
        return "not enough money";
    } else {
        return change;
    }
}

console.log(getChange(2.50, 5));
// “Hey vending machine, the price is $2.50, and I paid $5. What’s my change?”
console.log(getChange(4, 20));

// Logic quest 2.

// write a function called isWeekend(day) that returns: 
// "yes" if the day is saturday or sunday
// "no" if it's any other day

function isWeekend(day) {
    console.log(`${day}`);
    if (day === "Saturday" || day === "Sunday") {
        return "yes";
    } else {
        return "no";
    }
}

// hint: You’ll want to:
// Compare the input (day) to "Saturday" and "Sunday"
// Use if/else or a logical OR (||) to check both days

console.log(isWeekend("monday")); //-> "No"
console.log(isWeekend("Sunday")) //-> "Yes"


// Logic 3.
// Write a function called canVote(age) that returns:
// "Yes" if the person is 18 or older
// "No" if they are under 18

canVote(20) //-> "Yes"
canVote(17) //-> "No"
