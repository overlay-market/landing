import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const data = {
  technical: "Technical",
  oips: "OIPs",
  oipsDescription: "OIPs are the place to contribute to the development of the protocol.",
  github: "GitHub",
  githubDescription: "Where all us Noob-Noobs go.",
  githubImg: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/github%201.png?alt=media",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  text1a: "A cryptocurrency that lets you long or short DeFi data streams.",
  text1b: "Dynamically mints or burns to compensate traders for their profit or loss.",
  text1c: "Governs the system so successful traders decide the trajectory of the protocol.",
  twitter3: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/twitter%203.png?alt=media",
  overlayLogoCircles: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/overlay-logo-circles%201.png?alt=media",
};

class Technical extends Component {
  render = () => (
    <Container className="py-3 px-0" style={{ width: '256px' }}>
      <div>
        <h1 className="roboto-black-mine-shaft-36px m-0">{data.technical}</h1>
        <img className="line-3" src={data.line3} />
      </div>
      <div className="d-flex flex-column">
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">
            <img className="icon-5" src={data.overlayLogoCircles} />
          </Col>
          <Col className="d-flex flex-column" style={{ lineHeight: '1.35' }}>
            <a href="https://oips.overlay.market/" className="roboto-normal-mine-shaft-16px"><u>{data.oips}</u></a>
            <div className="roboto-normal-mine-shaft-16px">{data.oipsDescription}</div>
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">
            <img className="icon-5" src={data.githubImg} />
          </Col>
          <Col className="d-flex flex-column" style={{ lineHeight: '1.35' }}>
            <a href="https://github.com/overlay-market/" className="roboto-normal-mine-shaft-16px"><u>{data.github}</u></a>
            <div className="roboto-normal-mine-shaft-16px">{data.githubDescription}</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Technical;
