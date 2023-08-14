import React from "react";

export default function Footer() {
  const myStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 10px",
    textAlign: "center",
    marginTop: "32%",
  };

  return (
    <div style={myStyle}>
      <p> Created by Ridsa Shabbir &copy; All rights reserved</p>
    </div>
  );
}
