import React from "react";

export default function LoginSignup() {
  const myStyle = {
    border: "1px solid black",
    width: "40%",
    padding: "7%",
    fontSize: "small",
    color: "white",
    backgroundColor: "#7A316F",
    borderRadius: "20px",
  };

  const myStyleB = {
    padding: "10px",
    bottom: "0",
    marginLeft: "45%",
    backgroundColor: "#461959",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1 style={{ textAlign: "center" }}>Login / Signup</h1>
      <form action="">
        <div className="my-4">
          <input
            type="email"
            placeholder="Email"
            style={{ width: "70%", marginLeft: "15%", padding: "5px" }}
            required
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            placeholder="Password"
            style={{ width: "70%", marginLeft: "15%", padding: "5px" }}
            required
          />
        </div>
        <div>
          {" "}
          <button type="submit" style={myStyleB}>
            Login
          </button>
        </div>
      </form>
      <p className="my-3" style={{ marginLeft: "60px", fontSize: "1rem" }}>
        Don't have an account?{" "}
        <a href="/" style={{ color: "white", fontWeight: "bold" }}>
          Signup
        </a>
      </p>
    </div>
  );
}
