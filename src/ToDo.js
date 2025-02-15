import React, { useState } from "react";
import "./todo.css"; 
function ToDo() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input field
  const [inputValue, setInputValue] = useState("");

  // Function to add a task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]); // Add the new task to the list
      setInputValue(""); // Clear the input field
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filter out the task to remove
    setTasks(newTasks); // Update the task list
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <div className="todo-container">
        {/* Label and Input Field */}
        <label htmlFor="taskInput">Add a new task:</label>
        <input
          id="taskInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        {/* Add Button */}
        <button onClick={addTask}>Add Task</button>

        {/* Display the List of Tasks */}
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;