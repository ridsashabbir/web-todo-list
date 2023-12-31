import React, { useState } from "react";
export default function Todolist(props) {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedText, setEditedText] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };
  // const deleteItem = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
  // };
  const deleteItem = (key) => {
    let newListTodo = [...tasks];
    newListTodo.splice(key, 1);
    setTasks([...newListTodo]);
  };
  const myStyle = {
    marginLeft: "25%",
    border: "1px solid black",
    width: "50%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#7A316F",
  };
  const myStyleC = {
    height: "50vh",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    width: "80%",
    marginLeft: "10%",
  };
  const myStyleB = {
    padding: "10px 20px",
    backgroundColor: "#461959",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10%",
  };
  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "82%",
    padding: "10px",
    marginBottom: "10px",
    color: "#7A316F",
    fontWeight: "bold",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "5%",
    marginTop: "5px",
    backgroundColor: "#FBDFF0",
  };
  const deleteIconStyle = {
    color: "#FF5733",
    cursor: "pointer",
    fontSize: "1.3rem",
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0px",
  };
  const editIconStyle = {
    cursor: "pointer",
    fontSize: "1.5rem",
    marginLeft: "auto",
    marginRight: "6px",
  };
  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedText;
    setTasks(updatedTasks);
    setEditIndex(-1);
    setEditedText("");
  };
  return (
    <div style={myStyleC}>
      <div style={myStyle}>
        <h1 style={{ textAlign: "center", color: "white" }}>Todo List</h1>
        <form onSubmit={handleTaskSubmit}>
          <div style={inputContainerStyle}>
            <input
              type="text"
              value={taskInput}
              placeholder="Enter your task here"
              onChange={handleInputChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                width: "50%",
                marginLeft: "20px",
                color: "#7A316F",
                backgroundColor: "#F8E7E7",
              }}
              required
            />
            <button type="submit" style={myStyleB}>
              Add Task
            </button>
          </div>
        </form>

        <div>
          {tasks.map((task, index) => (
            <div key={index} style={listItemStyle}>
              {index === editIndex ? (
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    style={{ marginRight: "10px" }}
                  />
                  <i
                    className="fa-solid fa-check"
                    style={editIconStyle}
                    onClick={() => saveEditedTask(index)}
                  ></i>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <i
                    className="fa-solid fa-pencil-square"
                    style={editIconStyle}
                    onClick={() => {
                      setEditIndex(index);
                      setEditedText(task);
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can icon-delete"
                    style={deleteIconStyle}
                    onClick={() => deleteItem(index)}
                  ></i>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
