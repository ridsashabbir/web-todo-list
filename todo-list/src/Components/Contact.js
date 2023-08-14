import React, { useState } from "react";

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
    setSubmitMessage("Message Submitted Successfully!");
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="Enter your Message"
          id=""
          cols="40"
          rows="7"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{submitMessage}</p>
    </div>
  );
}
