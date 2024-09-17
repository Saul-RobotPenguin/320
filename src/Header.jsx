import React from "react";
import "./App.css";

function Header({ title, goBack }) {
  return (
    <div className="header">
      {goBack && <button onClick={goBack}>Back</button>}
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
