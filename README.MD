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
