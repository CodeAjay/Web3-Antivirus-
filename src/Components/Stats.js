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

const Stats = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row>
          <Col md={4}>
            <div className="stats-column">
              <h2>Websites blocklisted</h2>
              <p>461,738</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stats-column">
              <h2>Dangerous contracts detected</h2>
              <p>74,213</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stats-column">
              <h2>Supported networks</h2>
              <Row>
                <Col md={3}>
                  <div className="stats-column">
                    <FontAwesomeIcon icon={faBitcoin} size="2x" />
                    <p className="icns">Protected</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="stats-column">
                    <FontAwesomeIcon icon={faShopify} size="2x" />
                    <p className="icns">Coming soon</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="stats-column">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    <p className="icns">Coming soon</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
