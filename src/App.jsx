import React from "react";
import Accordian from "./Components/accordian/index.jsx";
import RandomColor from "./Components/random-color/index.jsx";
import StarRating from "./Components/star-rating/index.jsx";
import ImageSlider from "./Components/Image-Slider/index.jsx";
import LoadMoreData from "./Components/Load-More-Data/index.jsx";
import TreeView from "./Components/Tree-View/index.jsx";
import { Menus } from "./Components/Tree-View/data.js";
import QrCodeGenerator from "./Components/Qr-Code generator/index.jsx";
import LightDarkSwitcher from "./Components/dark-light-switch/index.jsx";
import ScrollIndicator from "./Components/scroll-indicator/index.jsx";
import TabTest from "./Components/Custom-Tabs/tabTest.jsx";
import ModelTest from "./Components/Custom-Model/Model-test.jsx";
export default function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={Menus} /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkSwitcher /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      <ModelTest />
    </div>
  );
}
