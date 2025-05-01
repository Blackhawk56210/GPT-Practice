#### 1. What’s the goal?
## Start by clearly stating in one sentence:
## 👉 “This function should…”
## Example: “This function should check if a guessed number matches a secret number.”

#### 2. What does it need (inputs)?
## Think: What information does the function need to work? These become the parameters.
## Example: It needs:

## The user’s guess

## The secret number

## So your function might look like:
## function checkGuess(userGuess, secretNumber) { ... }

#### 3. What decisions does it need to make (logic)?
## This is where you describe the “thinking” part.
## Ask yourself:

## Are you comparing values?

## Looping over something?

## Checking a condition?
## Example:

## If the guess is correct → say “Correct!”

## If the guess is low → say “Too low”

## If the guess is high → say “Too high”

#### 4. What should it give back (output)?
## Does it return something? Log something? Change the page?
## Example:

## It returns a string with feedback.

#### 5. Optional: Break it down even further
## If the logic feels big, split the function into smaller helpers.
## Big idea: One function = One job.

###  READ
## let data = source.value || localStorage.getItem("key");

### PROCESS
## let processedData = data.split(", "); // or any method like push, map, etc.

### SAVE
## localStorage.setItem("key", JSON.stringify(processedData));


## Example
### READ
## let taskString = taskInput.value;

### PROCESS
## let tasks = taskString.split(", ");
## tasks.push("Walk the dog");

### SAVE
## localStorage.setItem("tasks", JSON.stringify(tasks));
