import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepak saini</span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I am completed for (MCA) From CMR Institute of Technology.
            <br />
            I have experience as a full stack developer on GeeksIT Data Solutions Pvt. Ltd.
            <br />
            I’m starting a new position as Full-stack Developer at Erik Business Consultancy Services LLP.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Deepak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
