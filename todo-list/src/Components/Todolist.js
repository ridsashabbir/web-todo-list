// import React, { useState } from "react";

// export default function Todolist(props) {
//   const [taskInput, setTaskInput] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleInputChange = (e) => {
//     console.log("added task");
//     setTaskInput(e.target.value);
//   };

//   const handleTaskSubmit = (e) => {
//     e.preventDefault();
//     if (taskInput.trim() === "") return;
//     setTasks([...tasks, taskInput]);
//     setTaskInput("");
//   };

//   const deleteItem = (key) => {
//     let newListTodo = [...tasks];
//     newListTodo.splice(key, 1);
//     setTasks([...newListTodo]);
//   };

//   const myStyle = {
//     marginLeft: "25%",
//     border: "1px solid black",
//     width: "50%",
//     padding: "10px",
//     borderRadius: "30px",
//     backgroundColor: "#7A316F",
//   };
//   const myStyleC = {
//     height: "10vh",
//     color: "white",
//   };
//   const myStyleB = {
//     padding: "10px",
//     backgroundColor: "#461959",
//     color: "white",
//     fontWeight: "bold",
//   };

//   return (
//     <div className="container" style={myStyleC}>
//       <div style={myStyle} className="container my-4">
//         <h1
//           style={{
//             marginTop: "5%",
//             marginLeft: "30%",
//             height: "15vh",
//             color: "white",
//           }}
//         >
//           Todo-List
//         </h1>
//         <form
//           onSubmit={handleTaskSubmit}
//           style={{ marginTop: "0%", marginLeft: "20%", height: "15vh" }}
//         >
//           <input
//             style={{ padding: "10px", color: "purple" }}
//             type="text"
//             value={taskInput}
//             placeholder="Enter your Task here"
//             onChange={handleInputChange}
//             required
//           />
//           <button type="submit" className="b mx-3" style={myStyleB}>
//             Add Task
//           </button>
//         </form>
//         <div className="container">
//           {/* <ul>
//             {tasks.map((task, index) => (
//               <div key={index}>{task}</div>
//             ))}
//           </ul> */}

//           <li className="list-item">
//             {tasks.map((task, index) => (
//               <div key={index}>{task}</div>
//             ))}

//             <span className="icons">
//               <i
//                 className="fa-solid fa-trash-can icon-delete"
//                 onClick={(task) => {
//                   deleteItem(task.index);
//                 }}
//               ></i>
//             </span>
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
export default function Todolist(props) {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };
  const deleteItem = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
    width: "70%",
    padding: "10px",
    marginBottom: "10px",
    color: "#7A316F",
    fontWeight: "bold",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "5%",
    marginTop: "5px",
    backgroundColor: "#F6C6EA",
  };
  const deleteIconStyle = {
    color: "#FF5733",
    cursor: "pointer",
  };
  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0px",
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
              <span>{task}</span>
              <i
                className="fa-solid fa-trash-can icon-delete"
                style={deleteIconStyle}
                onClick={() => deleteItem(index)}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
