import React from "react";

export function Header( props ) {
  // console.log(props)
  return (
    <header
      style={{
        backgroundColor: "#222",
        height: "10px",
        padding: "20px",
        color: "white",
        display: "flex",
        justifyContent: "left"
      }}
    >
      <h1>Genre</h1>
    </header>
  );
}
