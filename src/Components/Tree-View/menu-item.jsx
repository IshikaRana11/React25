import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function MenuItem({ item }) {
  const [expand, setExpand] = useState(false);
  function handleClick() {
    setExpand(!expand);
  }
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleClick()}>
            {expand ? (
              <FaMinus color="white" size={15} />
            ) : (
              <FaPlus color="white" size={15} />
            )}
          </span>
        ) : null}
      </div>
      {expand ? <MenuList list={item.children} /> : null}
    </li>
  );
}
