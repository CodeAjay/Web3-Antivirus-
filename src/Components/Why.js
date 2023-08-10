import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiCrop, FiEye, FiThumbsUp,FiRefreshCcw } from 'react-icons/fi';

const Colmn=({whyimg, whytxt,whydesc})=>{
    return(
        <>
        <Col md={`${3} whywhy`} >
            <div className="whycontent">
                <div className="whyimg">
                    {whyimg}
                </div>
                <div className="whytext">
                    {whytxt}
                </div>
            </div>
            <p>{whydesc}</p>
        </Col>
        </>
    )
}

const Why=()=>{
    return(
        <>
        <div className="whysection">
            <Container>
                <h1>Why Web3 Antivirus?</h1>
                <Row>
                    <Colmn whyimg={<FiCrop />} whytxt={"Hassle-free installation"} whydesc={"Simply add the extension to your browser. No payment or personal info required."}/>
                    <Colmn whyimg={<FiEye />} whytxt={"Full transparency"} whydesc={"W3A is open-source so you can make sure that the extension operates precisely as described."}/>
                    <Colmn whyimg={<FiThumbsUp />} whytxt={"Easy to understand"} whydesc={"The reports use visual cues and plain language to explain threats so you don’t have to be an expert to understand them."}/>
                    <Colmn whyimg={<FiRefreshCcw />} whytxt={"Constantly upgrading"} whydesc={"W3A’s level of protection is always increasing, guarding you against new scams as soon as they’re identified."}/>
                </Row>
                <Colmn whyimg={<FiEye />} whytxt={"Poisoning attacks detection"} />
                <Row>
                    <Colmn whytxt={"$73B+"} whydesc={"Total amount of assets in poisoned wallets"}/>
                    <Colmn whytxt={"$7,779,934"} whydesc={"Total amount of money lost due to poisoning attacks"}/>
                    <Colmn whytxt={"243,468"} whydesc={"Total poisoning attacks"}/>
                    <Colmn whytxt={"2,671"} whydesc={"24h poisoning attacks"}/>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Why;