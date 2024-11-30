import React from "react";
import "./HeroSection.scss";

const ButtonSection = () => {
  return (
    <div className=" p-3 button-section">
      <div className=" button-text">RESEARCH</div>
      {/* <div className=" button-border button-text">HOME</div> */}
      <div className="button-divider"></div>
      <div className="button-text">CONTACT</div>
    </div>
  );
};

export default ButtonSection;
