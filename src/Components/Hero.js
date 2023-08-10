import {React,useState,useEffect }from "react";
import { Container, Row, Col } from "react-bootstrap";
import Securiry from '../assets/security.png';
import "./cstyle.css";
// import { FaUserShield } from "react-icons/fa";

const Hero = () => {
  const [changingText, setChangingText] = useState("changing text 1");
  const textList = ["phishing websites", "dangerous signing requests", "honeypots","metamorphic code", "delegated call injections","reentrancy attacks","phishing websites","dangerous signing requests", "fake websites"];
  let currentIndex = 0;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textList.length;
      setChangingText(textList[currentIndex]);
      setAnimate(true);

      // Reset the animation after a short delay
      setTimeout(() => {
        setAnimate(false);
      }, 500);

    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={`${9} ftct`} >
          <h1>Take back your safety in Web3:<br />no more <span className="changetext"> <span className={`cgtext ${animate ? 'upward' : ''}`}>{changingText}</span></span></h1>
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
