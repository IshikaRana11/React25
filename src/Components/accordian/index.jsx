import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    let cpymultiple = [...multiple];
    const findIndexOfCurrentId = cpymultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId == -1) cpymultiple.push(getCurrentId);
    else cpymultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpymultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multiple Selection
      </button>
      {/**to create the accordian */}
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            /**item-------------------- */
            <div className="item">
              {/**title------------------- */}
              <div
                className="title"
                onClick={
                  multiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {/**title---------------------- */}
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) != -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
            /**items----------------------- */
          ))
        ) : (
          <div>"No data Found"</div>
        )}
      </div>
      {/**to create the accordian */}
    </div>
  );
}
