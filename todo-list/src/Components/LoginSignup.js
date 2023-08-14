import React from "react";

export default function LoginSignup() {
  return (
    <div>
      <h1>Login / Signup</h1>
      <form action="">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/">Signup</a>
      </p>
    </div>
  );
}
