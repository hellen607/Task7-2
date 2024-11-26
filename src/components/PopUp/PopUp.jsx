import React from "react";
import "./PopUp.css";

export default function PopUp({ event }) {
  return (
    <div className="popup">
      <h1>{event}</h1>
    </div>
  );
}
