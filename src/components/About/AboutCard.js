import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepak Saini</span> from
            <span className="purple"> Rajasthan, India.</span>
            <br />
            <br />
            I have completed my <b>Master of Computer Applications (MCA)</b> from
            CMR Institute of Technology, Bangalore.
            <br />
            <br />
            I am a passionate <b>Full Stack Developer</b> with experience in
            <b> MERN Stack development (React.js, Node.js, Express.js, MongoDB)</b>
            and also skilled in <b>PHP, CodeIgniter, and MySQL</b>.
            <br />
            <br />
            I also have <b>basic knowledge of Python and Django</b> and I am
            currently learning them to build scalable backend applications.
            <br />
            <br />
            I have worked as a <b>Full Stack Developer</b> at
            <b> GeeksIT Data Solutions Pvt. Ltd.</b> and completed an internship
            as a <b>MERN Stack Developer</b> at <b>Infatoz Technologies</b>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Deepak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
