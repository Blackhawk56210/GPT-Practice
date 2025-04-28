console.log("I created the perfect system");
/*
You are building a simple task manager. The user will add tasks, remove them, and mark tasks as completed.

You need to implement the following functionality:

Add a new task to the task list.

Remove a task by task name.

Mark a task as completed (change the task’s status to "completed").

Display the task list (including whether each task is completed or not).

Steps to complete:
Use an array to store tasks.

Each task should be an object with taskName and status properties.

Use .push(), .splice(), and .split() as needed.
*/ 

let taskList = [
    { taskName: "laundry", status: "incomplete" },
    { taskName: "dishes", status: "incomplete" },
];
  
// Example operations:
//1. Add a new task: `"Homework"`
//2. Remove the task `"dishes"`
//3. Mark `"laundry"` as completed
function addTask() {
  let taskInput = document.getElementById("inputField");
  let task = JSON.parse(localStorage.getItem("tasks")) || [];
  task.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(task));
  displayTask();
  taskInput.value = "";
}

function displayTask() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((tasks, index) => {
    const li = document.createElement("li");
    li.innerHTML = 
    `${tasks} <button onclick="removeTask(${index})">remove</button>
    <input type="checkbox" id="status" value="complete" name="completeTask"></input>`;
    taskList.appendChild(li);
  })
}

// function completeTask() {
//   let taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";
//   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.forEach((tasks, index) => {
//     const li = 
//   })
// }

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
}

/*
Expected Output:
After adding "Homework", the task list should have 3 tasks.

After removing "dishes", the task list should have 2 tasks.

After marking "laundry" as completed, its status should change to "completed".
*/