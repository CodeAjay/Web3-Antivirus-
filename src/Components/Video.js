import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import chromelogo from '../assets/chrome-logo.svg';
import firefoxlogo from '../assets/firefox-logo.svg';
import bravelogo from '../assets/brave-logo.svg';
import edgelogo from '../assets/edge-logo.svg';
import './cstyle.css';

const Features=({num, content})=>{
    return (
        (
            <>
            <div className="feature">
                <div className="num">
                    {num}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            </>
        )
    )
}

const VideoSection =()=>{
    return(
        <>
        <section className="video-section" id="how">
            <h1>How Web3 Antivirus protects you</h1>
            <Container>
            <Row>
            <Col md={3} className="hhh">
                <Features num="1" content={"Once you install W3A, the active protection is immediately on"} />
            </Col>
            <Col md={3} className="hhh">
                <Features num="2" content={"Get a visual warning if you head to a phishing website"} />
            </Col>
            <Col md={3} className="hhh">
                <Features num="3" content={"Receive a real-time risk report before approving a transaction"} />
            </Col>
            <Col md={3} className="hhh">
                <Features num="4" content={"Decide if you want to stop or proceed based on the presented report"} />
            </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto">
                    <div className="videocontainer">
                    <video loop autoPlay playsInline muted>
                    <source src="https://w3a.checknft.io/video/w3a-landing-video.mp4" type="video/mp4" />
                    <source src="https://w3a.checknft.io/video/w3a-landing-video.avif" />
                    </video>
                    <Row className="rlgs">
                        <Col md={3}>
                        <img src={chromelogo} />
                        <p className="rlgstxt">Chrome</p>
                        </Col>
                        <Col md={3}>
                        <img src={firefoxlogo} />
                        <p className="rlgstxt">Firefox</p>
                        </Col>
                        <Col md={3}>
                        <img src={bravelogo} />
                        <p className="rlgstxt">Brave</p>
                        </Col>
                        <Col md={3}>
                        <img src={edgelogo} />
                        <p className="rlgstxt">Edge</p>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
            </Container>
        </section>
        </>
    )
}

export default VideoSection;