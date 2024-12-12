import React, { useState } from "react";
import "./style.css";
export default function CustomTab({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper" style={{ backgroundColor: "GrayText" }}>
      <div className="heading">
        {tabsContent.map((tabsItem, index) => (
          <div
            onClick={() => handleOnClick(index)}
            key={tabsItem.label}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
          >
            <span className="label">{tabsItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "blue", fontSize: "40px" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
