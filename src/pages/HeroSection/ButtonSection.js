import React from "react";
import "./HeroSection.scss";
import pdfUrlLink from "../../assests/Darwin.pdf";

const ButtonSection = () => {
  const handleResearchClick = () => {
    // Open a new tab
    const newTab = window.open("", "_blank");

    // Embed the PDF inside the iframe in the new tab
    newTab.document.title = "PDF Viewer";
    newTab.document.body.innerHTML = `
      <iframe src="${pdfUrlLink}#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
              width="100%" 
              height="100%" 
              style="border: none;" 
              allowfullscreen="true"></iframe>
    `;
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
      <div className="button-text" onClick={handleResearchClick}>
        RESEARCH
      </div>
      <div className="button-divider"></div>
      <div className="button-text" onClick={handleContactClick}>
        CONTACT
      </div>
    </div>
  );
};

export default ButtonSection;
