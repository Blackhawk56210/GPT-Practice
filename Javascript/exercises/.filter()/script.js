console.log("I created the perfect system");

function displayTask() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    // Get the current filter value from dropdown
    const filter = document.getElementById("filterSelect").value;
  
    // Apply the filter
    let filteredTasks = tasks.filter(task => {
      if (filter === "all") return true;
      return task.status === filter;
    });
  
    // Render filtered tasks
    filteredTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${task.taskName} 
        <button onclick="removeTask(${index})">remove</button>
        <input type="checkbox" ${task.status === "completed" ? "checked" : ""} onclick="toggleStatus(${index})">
      `;
      taskList.appendChild(li);
    });
  }