import React from "react";
import "./GridLayout.scss";

const GridLayout = ({ children }) => {
  return (
    <div className="grid-layout position-relative">
      {/* <div className={`bg-square ${squarePosition}`}></div> */}
      <div className="bg-square"></div>
      <div className="grid-child-zindex position-relative">{children}</div>
    </div>
  );
};

export default GridLayout;
