import React from "react";
import "./Model.css";
export default function Model({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="model">
      <div className="model-content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "HEADER"}</h2>
        </div>
        <div className="body">{body ? body : "this is models body"}</div>
        <div className="footer">
          <h2>{footer ? footer : "footer"}</h2>
        </div>
      </div>
    </div>
  );
}
