import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEthereum,
  faBitcoin,
  faShopify,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./cstyle.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <h1>This is Hero Section</h1>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
