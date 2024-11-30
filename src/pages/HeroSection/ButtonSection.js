import React from "react";
import "./HeroSection.scss";
import pdfUrlLink from "../../assests/Darwin.pdf";

const ButtonSection = () => {
  const handleResearchClick = () => {
    window.open(pdfUrlLink, "_blank");
  };

  const handleContactClick = () => {
    const emailAddress = "mohamedusama1528@gmail.com";
    const subject = "Subject of your email";
    const body = "This is the body of your email.";
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="button-section">
      <div className=" button-text" onClick={handleResearchClick}>
        RESEARCH
      </div>
      {/* <div className=" button-border button-text">HOME</div> */}
      <div className="button-divider"></div>
      <div className="button-text" onClick={handleContactClick}>
        CONTACT
      </div>
    </div>
  );
};

export default ButtonSection;
