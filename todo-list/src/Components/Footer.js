import React from "react";

export default function Footer() {
  const myStyle = {
    backgroundColor: "#461959",
    color: "white",
    padding: "10px 10px",
    textAlign: "center",
    marginTop: "12%",
    // position: "fixed",
    marginBottom: "0%",
    width: "100%",
  };

  return (
    <div style={myStyle}>
      <p> Created by Ridsa Shabbir &copy; All rights reserved</p>
    </div>
  );
}
