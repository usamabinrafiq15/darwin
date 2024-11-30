import React from "react";
import GridLayout from "../../Layouts/GridLayout";
import { Container } from "react-bootstrap";
import "./ContentSection.scss";

const ContentSection = () => {
  return (
    <GridLayout squarePosition="square-position-2">
      <Container>
        <div className=" d-flex justify-content-center content-wrapper">
          <div></div>
        </div>
      </Container>
    </GridLayout>
  );
};

export default ContentSection;
