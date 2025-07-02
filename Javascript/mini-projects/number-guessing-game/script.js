console.log("I created the perfect system");

/*
1. Create a function startGame() that:
--Picks a random number from 1 to 10.
--Prompts the user to guess (use prompt() just for now).
--Calls checkGuess() and alerts the result.
--Repeats until the guess is correct.
--Counts the number of attempts.
*/


function checkGuess(userGuess, secretNumber) {
    if (userGuess === secretNumber) {
      return "Correct! 🎉";
    } else if (userGuess < secretNumber) {
      return "Too low!";
    } else {
      return "Too high!";
    }
};
