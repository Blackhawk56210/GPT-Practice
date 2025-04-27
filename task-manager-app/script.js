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
  
/*
Expected Output:
After adding "Homework", the task list should have 3 tasks.

After removing "dishes", the task list should have 2 tasks.

After marking "laundry" as completed, its status should change to "completed".
*/