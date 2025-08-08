import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepak saini </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            <br />
            I have completed my Master of Computer Applications (MCA) from CMR Institute of Technology, Bangalore.
            <br />
            <br />
            I have professional experience as a MERN Stack Developer,
            <br />
            having worked at GeeksIT Data Solutions Pvt. Ltd. and
            <br />
            completed a hands-on internship at Infatoz Technologies,
            <br />
            where I advanced my skills in MERN-based development.
            <br />
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
