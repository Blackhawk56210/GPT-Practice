let chores = ["laundry", "dishes", "homework", "mow lawn"];

chores.splice(1, 1, "Walk the dog");
chores.splice(2, 1, "study javascript");

let inventory = ["sword", "shield", "potion", "helmet", "boots"];

// Remove "potion" and "helmet" (both).
// Insert "magic staff" at index 1 (where "shield" is currently).
// At the end, add "cloak" using .splice() — not .push()!
inventory.splice(2, 2);
inventory.splice(1, 1, "magic staff");
inventory.splice(inventory.length, 0, "cloak");

console.log("inventory:", inventory);