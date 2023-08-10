import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Securiry from '../assets/security.png';
import "./cstyle.css";
import { FaUserShield } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={9}>
          <h1>Take back your safety in Web3:<br />no more</h1>
          <p>Explore Web3 with full confidence guarded by our security browser extension. Web3 Antivirus proactively protects you from malicious smart contracts and phishing websites and warns you not to fall into a scam.</p>
          <button><span className="hrbtntxt">Add W3A to my </span><img class="hrbtnlogo" src="https://web3antivirus.io/images/browsers/chrome-logo.svg" alt="Chrome logo" /></button>
          <p className="ext">The extension is free!</p>
          </Col>
          <Col md={3}>
            <img className="scrty" src={Securiry} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
