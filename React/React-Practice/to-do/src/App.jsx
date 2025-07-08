import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    setInput("")
    setToDos([...todos, input])
  }

  const deleteTask = (indexToDelete) => {
    setToDos(todos.filter((_, i) => i !== indexToDelete))
  }

  return (
    <>
    <div>
      <h2>TO DO</h2>
      <input 
      type="text"
      placeholder="Tasks"
      value={input}
      onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App