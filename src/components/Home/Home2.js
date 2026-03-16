import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">Full Stack Developer</b> who loves
              building scalable and user-friendly web applications.
              <br />
              <br />

              I have strong experience in
              <i>
                <b className="purple">
                  {" "}
                  PHP, CodeIgniter (3 & 4), JavaScript, HTML, CSS and React.js
                </b>
              </i>
              .
              <br />
              <br />

              My main focus is developing modern web applications using
              <b className="purple"> MERN Stack (MongoDB, Express.js, React.js, Node.js)</b>
              and creating efficient backend systems.
              <br />
              <br />

              I also have <b className="purple">basic knowledge of Python and Django</b>
              and I am currently learning them to build scalable backend applications.
              <br />
              <br />

              I also work as a <b className="purple">freelance developer on Upwork</b>,
              where I help clients build and improve web applications.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Deepak081999"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/deepak-saini-435095230"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/l_b_aniket_3081"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01f22da2cd313a3e9e?mp_source=share"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
