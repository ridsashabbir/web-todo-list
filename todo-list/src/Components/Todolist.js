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

  const myStyle = {
    marginLeft: "25%",
    border: "1px solid black",
    width: "50%",
    padding: "10px",
    borderRadius: "30px",
    backgroundColor: "#7A316F",
  };
  const myStyleC = {
    height: "10vh",
    color: "white",
  };
  const myStyleB = {
    padding: "10px",
    backgroundColor: "#461959",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="container" style={myStyleC}>
      <div style={myStyle} className="container my-4">
        {/* <style>{body { background-color: '#F5C6EC'; }}</style> */}
        <h1
          style={{
            marginTop: "5%",
            marginLeft: "30%",
            height: "15vh",
            color: "white",
          }}
        >
          Todo-List
        </h1>
        <form
          onSubmit={handleTaskSubmit}
          style={{ marginTop: "0%", marginLeft: "20%", height: "15vh" }}
        >
          <input
            style={{ padding: "10px" }}
            type="text"
            value={taskInput}
            placeholder="Enter your Task here"
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="b mx-3" style={myStyleB}>
            Add Task
          </button>
        </form>

        <ul>
          {tasks.map((task, index) => (
            <div key={index}>{task}</div>
          ))}
        </ul>
      </div>
    </div>
  );
}
