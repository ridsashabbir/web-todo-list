import React, { useState } from "react";

export default function Todolist() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    console.log("added task");
    setTaskInput(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  return (
    <div>
      <h1>Todo-List</h1>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </ul>
    </div>
  );
}
