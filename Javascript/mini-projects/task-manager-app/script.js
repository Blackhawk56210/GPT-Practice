/*
You are building a simple task manager. The user will add tasks, remove them, and mark tasks as completed.

You need to implement the following functionality:

Add a new task to the task list. DONE

Remove a task by task name.  ??

Mark a task as completed (change the task’s status to "completed"). DONE?

Display the task list (including whether each task is completed or not). Done?

Steps to complete:
Use an array to store tasks.

Each task should be an object with taskName and status properties.

Use .push(), .splice(), and .split() as needed.

Expected Output:
After adding "Homework", the task list should have 3 tasks.

After removing "dishes", the task list should have 2 tasks.

After marking "laundry" as completed, its status should change to "completed".
*/
console.log("I created the perfect system");
toggleStatus();

let taskList = [
    { taskName: "laundry", status: "incomplete" },
    { taskName: "dishes", status: "incomplete" },
];

function addTask() {
  let taskInput = document.getElementById("inputField");
  let task = JSON.parse(localStorage.getItem("tasks")) || [];
  task.push({ taskName: taskInput.value, status: "incomplete" });
  localStorage.setItem("tasks", JSON.stringify(task));
  displayTask();
  taskInput.value = "";
}

function displayTask() {
  let taskList = document.getElementById("taskList");
  let filterValue = document.getElementById("filterSelect").value
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (filterValue === "completed") {
    tasks = tasks.filter(tasks.filter(task => task.status === "completed"));
  } else if (filterValue === "incomplete") {
    tasks.filter(task => task.status === "incomplete");
  }
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = 
    `${task.taskName} 
    <button onclick="removeTask(${index})">remove</button>
    <input type="checkbox" ${task.status === "completed" ? "checked" : ""} onclick="toggleStatus(${index})">`;
    taskList.appendChild(li);
  });
}

function toggleStatus(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks[index]) {
  tasks[index].status = tasks[index].status === "completed" ? "incomplete" : "completed";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
  displayTask();
  }
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
}