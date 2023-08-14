import React, { useState } from "react";

export default function Todolist() {
  const [taskInput, setTaskInput] = useState([]);

  const handleInputChange = (e) => {
    console.log("added task");
    setTaskInput(e.target.value);
  };

  return (
    <div>
      <h1>Todo-List</h1>
      <form>
        <input type="text" value={taskInput} onChange={handleInputChange} />
      </form>
    </div>
  );
}
