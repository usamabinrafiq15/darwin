import React from "react";
import { Container } from "react-bootstrap";
import GridLayout from "../../Layouts/GridLayout";
import ButtonSection from "./ButtonSection";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <GridLayout squarePosition="square-position-1">
      <Container>
        <div className=" d-flex justify-content-center hero-wrapper">
          <div>
            <div className=" hero-wrapper-responsive">
              <div className=" d-flex flex-column align-items-center hero-text">
                <div className="d-block">Darwin</div>
                <div className="d-block">(Bio + AI)</div>
              </div>
              <div className="d-flex justify-content-center">
                <p className=" mt-lg-5 pt-5  text-center sub-text ">
                  The Onco Semantics R&D Lab on a mission to decode Cancer’s
                  language and enable Humans to develop High-precision Drugs!
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <p className="sub-content-text">
                Drug resistance remains a formidable challenge in cancer
                treatment, with a range of implications such as variable drug
                efficacy across patient populations (due to insufficient target
                validation during drug discovery), unexpected side effects,
                inconsistent therapeutic outcomes, and increased economic
                burdens for pharmaceutical companies, hospitals, and patients.
              </p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="sub2-content-text pt-0">
                <b>OncoGalactica :</b> To investigate the molecular causes of
                drug resistance in solid tumour conditions, Darwin (Bio + AI)
                has been actively developing OncoGalactica, its flagship AI
                Oncology Semantic framework, to:
              </p>
              <p className="sub2-content-text ">
                1. Integrate multi-dimensional molecular and clinical oncology
                data with AI semantics.
              </p>
              <p className="sub2-content-text">
                2. Decipher causal relationships between genes and downstream
                receptor and signalling proteins.
              </p>
              <p className="sub2-content-text">
                3. Reconstruct the unique molecular aetiology of individual
                patients.
              </p>
              <p className="sub2-content-text" style={{ marginBottom: "40px" }}>
                4. Identify key molecular mechanisms driving carcinogenesis and
                drug resistance in solid tumours with patient-level granularity.
              </p>
            </div>

            <div className="d-flex justify-content-center">
              <p className="sub-content-text">
                <b>Clinical Validation Trial :</b> In a multi-centre clinical
                validation trial conducted to validate the accuracy of
                OncoGalactica in investigating the molecular causes of drug
                resistance in advanced HER2-positive breast cancer patients who
                had previously developed resistance to trastuzumab and taxanes,
                11 patients in the treatment group, who were treated with an
                OncoGalactica-recommended combination of pertuzumab and
                alpelisib, showed an impressive Clinical Benefit Ratio (CBR) of
                90.9% with 0.0% drug-related toxicities. This indicates the
                accuracy of OncoGalactica in investigating the molecular causes
                of drug resistance in solid tumour conditions with patient-level
                granularity.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="sub-content-text">
                Please check the <b>“Research”</b> page below to get a
                high-level understanding of our OncoGalactica R&D, use cases,
                and key milestones.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="sub-content-text">
                If you wish to collaborate with us or are simply curious to know
                more about our research objectives, please feel free to reach
                out to us by clicking on <b>“Contact”</b>.
              </p>
            </div>

            <div className="d-flex justify-content-center">
              <p className="sub-content-text">
                <b>Privacy Notice :</b> We prioritise user privacy and
                anonymity. Therefore, our digital assets do not utilise cookies
                or user behaviour-tracking tools.
              </p>
            </div>

            <ButtonSection />
          </div>
        </div>
      </Container>
    </GridLayout>
  );
};

export default HeroSection;
