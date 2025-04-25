function saveTasks(taskString) {
    // 1. Convert string into array of tasks
    const tasks = taskString.split(", ");
    
    // 2. Save to localStorage as JSON
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    
    // 3. Add a new task
    tasks.push("walk the dog");

    // 4. Update localStorage with new list
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    
    // 5. Log the final result
    console.log("Updated Task List:", tasks);
}
