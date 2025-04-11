console.log("Hello World!");
// 1.Display your XP and Level
//  #Use a <span> or <div> to show your current XP and current level.

// 2.Create a button to gain XP
//  #Each click gives +10 XP.
let counter = 0;
let maxLevel = 10;
let expDisplay = document.getElementById("exp");
let experience = document.getElementById("expBtn");

function gain(expDisplay, maxLevel) {
    experience.addEventListener("click", () => {
        if (counter < maxLevel) {
            counter++;
            exp.textContent = counter;
        } else {
            alert("Level Up");
        }
    })
}
// 3.Level Up Mechanic
//  #When XP hits 100:
//  #Increase the level by 1
//  #Reset XP to 0