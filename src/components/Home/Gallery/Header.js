import React from "react";

export function Header({ genre }) {
  // console.log(genre, "header.js line4")
  return (
    <header
      style={{
        backgroundColor: "#222",
        height: "15px",
        padding: "20px",
        color: "white",
        display: "flex",
        justifyContent: "left"
      }}
    >
      <h2>{genre}</h2>
    </header>
  );
}
