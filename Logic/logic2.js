console.log("Hello world");

/*
You're designing a magic game. Players can brew potions only if:
They are level 10 or higher, and
They have the "Alchemist" badge
Write a function called canBrewPotion(level, hasBadge) that returns:
"You may brew potions!" if both conditions are true
"You need to reach level 10!" if they don’t meet the level requirement
"Only Alchemists may brew potions!" if they have the level but not the badge
*/

function canBrewPotion(level, hasBadge) {
  if (level >= 10 && hasBadge === true) {
    return "You may Brew Potions!";
  } else if (level < 10) {
    return "You need to reach level 10";
  } else {
    return "Only Alchemists may brew potions!";
  }
}
console.log(canBrewPotion(12, true)); //-> "You may brew potions!";
console.log(canBrewPotion(8, true)); //-> "You need to reach level 10!";
console.log(canBrewPotion(15, false)); //-> "Only Alchemists may brew potions!";

/*
To brew a potion, the player must have both "herb" and "crystal" in their inventory.
Write a function called hasIngredients(inventory) that returns:
"You have all the ingredients!" if both items are in the array
"You're missing some ingredients." if either one is missing
*/

function hasIngredients(inventory) {
  if (inventory.includes("herb") && inventory.includes("crystal")) {
    return "You have all the ingredients";
  } else {
    return "You're missing some ingredients";
  }
}

console.log(hasIngredients(["herb", "crystal", "mushroom"])); //➞ "You have all the ingredients!"
console.log(hasIngredients(["herb", "mushroom"])); //➞ "You're missing some ingredients."
console.log("//////break in code//////");

/*
You’re facing a magical door that reacts to your choice.
Write a function called chooseAction(action) that takes a string and returns:
"You open the door and step through..." if the player chooses "open"
"You wait... nothing happens." if they choose "wait"
"That’s not a valid action!" for anything else
*/

/*
Use an if / else if / else structure to check the value of action.
Ready to unlock some logic?*/

function chooseAction(action) {
  if (action === "open") {
    return "You open the door and step through...";
  } else if (action === "wait") {
    return "You wait... nothing happens.";
  } else {
    return "That’s not a valid action!";
  }
}

chooseAction("open"); //➞ "You open the door and step through..."
chooseAction("wait"); //➞ "You wait... nothing happens."
chooseAction("attack"); //➞ "That’s not a valid action!"
console.log("chooseAction:", chooseAction("open"));
console.log("chooseAction:", chooseAction("wait"));
console.log("chooseAction:", chooseAction("attack"));