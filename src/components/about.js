import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const data = {
  about: "About",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  number2: "01",
  number4: "02",
  number6: "03",
  text1a: "A cryptocurrency that lets you long or short DeFi data streams.",
  text1b: "Dynamically mints or burns to compensate traders for their profit or loss.",
  text1c: "Governs the system so successful traders decide the trajectory of the protocol.",
};

class About extends Component {
  render = () => (
    <Container className="py-3 px-0" style={{ width: '256px' }}>
      <div>
        <h1 className="roboto-black-mine-shaft-36px m-0">{data.about}</h1>
        <img className="line-3" src={data.line3} />
      </div>
      <div className="d-flex flex-column">
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">{data.number2}</Col>
          <Col className="roboto-normal-mine-shaft-16px" style={{ lineHeight: '1.35' }}>{data.text1a}</Col>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">{data.number4}</Col>
          <Col className="roboto-normal-mine-shaft-16px" style={{ lineHeight: '1.35' }}>{data.text1b}</Col>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">{data.number6}</Col>
          <Col className="roboto-normal-mine-shaft-16px" style={{ lineHeight: '1.35' }}>{data.text1c}</Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
