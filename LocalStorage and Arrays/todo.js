console.log("Read => Process => Save");
console.log("I created the perfect system");

/*function saveTasks(taskString) {
    // 1. Convert string into array of tasks
    const myTasks = taskString.split("Laundry, Dishes, Homework");
    
    // 2. Save to localStorage as JSON
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
    
    // 3. Add a new task
    myTasks.push("walk the dog");

    // 4. Update localStorage with new list
    localStorage.setItem("myTasks", JSON.stringify(myTasks)) || [];
    
    // 5. Log the final result
    console.log("Updated Task List:", myTasks);
}*/

// saveTasks("laundry, dishes, homework");
// saveTasks();
function initialization(taskString) {
  const tasks = taskString.split(", ");
  localStorage.setItem("tasks", JSON.stringify(tasks)) || [];
}

initialization("Laundry", "Homework", "Dishes");

function saveChore() {
  let taskInput = document.getElementById("task-input");
  let taskString = taskInput.value;
  let tasks = (taskString = taskString.split(", "));
  let taskList = JSON.parse(localStorage.getItem("taskList"));
  localStorage.setItem("tasks", JSON.stringify(tasks)) || [];
  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks)) || [];
  taskInput.value = "";
}
console.log("saveChore:", saveChore());
