import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const data = {
  streams: "Streams",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  grid: [
    [
      {
        ticker: "AAVE-ETH",
        price: "0.1516 ETH", // TODO: fetch from uniquote
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-15.png?alt=media",
      },
      {
        ticker: "SUSHI-ETH",
        price: "0.005743 ETH", // TODO: fetch from uniquote
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-18.png?alt=media",
      },
    ],
    [
      {
        ticker: "YFI-ETH",
        price: "30.95 ETH", // TODO: fetch from uniquote
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-17.png?alt=media",
      },
      {
        ticker: "UNI-ETH",
        price: "0.007131 ETH", // TODO: fetch from uniquote
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-16.png?alt=media",
      },
    ],
    [
      {
        ticker: "SNX-ETH",
        price: "0.01263 ETH", // TODO: fetch from uniquote
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-19.png?alt=media",
      },
      {
        ticker: "OVL-ETH",
        price: "- ETH", // TODO: fetch from uniquote
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-20.png?alt=media",
      },
    ]
  ]
};

class Streams extends Component {

  // TODO: state = {}, stream fetch ...

  state = {
    feeds: [],
  }

  // Fetches ETH quote price from store given priceId
  renderPrice = (priceId) => {
    if (!priceId) {
      return "- ETH";
    }
    return ("hi ETH");
  }

  renderStream = (stream) => (
    <Row className="py-2 align-items-center">
      <Col xs={5}>
        <div className="py-2">
          <div className="roboto-bold-mine-shaft-16px"><u>{stream.ticker}</u></div>
          <div className="pt-1 roboto-normal-mine-shaft-16px">{this.renderPrice(stream.price)}</div>
        </div>
      </Col>
      <Col>
        <img className="rectangle-15" src={stream.img} />
      </Col>
    </Row>
  )

  render = () => (
    <Container fluid className="p-0">
      <Row>
        <Col lg={true}>
          <Container className="py-3 px-0" style={{ width: '256px' }}>
            <div>
              <h1 className="roboto-black-mine-shaft-36px m-0">{data.streams}</h1>
              <img className="line-3" src={data.line3} />
            </div>
            <div className="d-flex flex-column">
              {data.grid[0].map((el) => this.renderStream(el))}
            </div>
          </Container>
        </Col>
        <Col lg={true}>
          <Container className="py-3 px-0" style={{ width: '256px' }}>
            <div className="d-none d-lg-block">
              <h1 className="roboto-black-mine-shaft-36px m-0">&nbsp;</h1>
              <span style={{ height: '1px' }}>&nbsp;</span>
            </div>
            <div className="d-flex flex-column">
              {data.grid[1].map((el) => this.renderStream(el))}
            </div>
          </Container>
        </Col>
        <Col lg={true}>
          <Container className="py-3 px-0" style={{ width: '256px' }}>
            <div className="d-none d-lg-block">
              <h1 className="roboto-black-mine-shaft-36px m-0">&nbsp;</h1>
              <span style={{ height: '1px' }}>&nbsp;</span>
            </div>
            <div className="d-flex flex-column">
              {data.grid[2].map((el) => this.renderStream(el))}
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Streams;
