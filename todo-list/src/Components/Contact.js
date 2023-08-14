import React, { useState } from "react";

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
    setSubmitMessage("Message Submitted Successfully!");
  };

  const myStyle = {
    border: "1px solid black",
    width: "50%",
    padding: "4%",
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
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="my-2">
          <input
            type="email"
            placeholder="Email"
            style={{ width: "70%", marginLeft: "15%", padding: "5px" }}
            required
          />
        </div>
        <div className="my-2">
          <input
            type="text"
            placeholder="Subject"
            style={{ width: "70%", marginLeft: "15%", padding: "5px" }}
            required
          />
        </div>
        <textarea
          style={{ width: "70%", marginLeft: "15%" }}
          className="my-2"
          name="message"
          placeholder="Enter your Message"
          id=""
          cols="40"
          rows="7"
          required
        />
        <div>
          <button type="submit" style={myStyleB}>
            Submit
          </button>
        </div>
      </form>
      <p>{submitMessage}</p>
    </div>
  );
}
