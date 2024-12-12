import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function handleScrollPercentage() {
    const howMuchScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (howMuchScrolled / height) * 100;
    setScrollPercentage(scrollPercent);
  }
  async function handleFetch(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    handleFetch(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    window.removeEventListener("scroll", () => {});
  }, []);
  return (
    <div>
      <div className="top-container">
        <h1>Custom Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
