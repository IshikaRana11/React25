import React, { useState } from "react";
import Model from "./Model";
import "./model.css";

export default function ModelTest() {
  const [modelPopUp, setModelPopUp] = useState(false);
  function handleToggleModelPopup() {
    setModelPopUp(!modelPopUp);
  }
  function onClose() {
    setModelPopUp(false);
  }
  return (
    <div>
      <button onClick={handleToggleModelPopup} className="toggle-btn">
        Show Model Popup
      </button>
      {modelPopUp && (
        <Model body={<div>Customize body!</div>} onClose={onClose} />
      )}
    </div>
  );
}
