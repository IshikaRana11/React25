import React, { useState } from "react";
import "./style.css";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("black");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleRandomHexColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRgbColor() {
    let bl = randomColorUtility(256);
    let gr = randomColorUtility(256);
    let rd = randomColorUtility(256);
    setColor(`rgb(${rd},${gr},${bl})`);
  }
  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div className="btns">
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create rgb color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
        >
          Generate random color
        </button>
      </div>
      <div className="color-descp">
        <h3>{typeOfColor}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
