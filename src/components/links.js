import React, { Component } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faExternalLinkAlt);

const data = {
  links: "Links",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  github1: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/github%201.png?alt=media",
  text9: "📃",
  whitepaper: "Whitepaper",
  whitepaper5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/OverlayWPv3.pdf?alt=media",
  telegram: "Telegram",
  discord: "Discord",
  medium: "Medium",
  medium5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Medium-512%201.png?alt=media",
  twitter: "Twitter",
  telegram5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Telegram-512%201.png?alt=media",
  discord5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/91_Discord_logo_logos-512%201(1).png?alt=media",
  twitter3: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/twitter%203.png?alt=media",
  text10: "😸",
  launchApp: "Launch App",
};

class Links extends Component {
  render = () => (
    <Container className="py-3 px-0" style={{ width: '256px' }}>
      <div>
        <h1 className="roboto-black-mine-shaft-36px m-0">{data.links}</h1>
        <img className="line-3" src={data.line3} />
      </div>
      <div className="d-flex flex-column">
        <Row className="p-2 mb-2">
          <Button href="https://overlay.exchange/" block className="shadow btn-light roboto-normal-mine-shaft-16px" target="_blank">
            <span>{data.text10}</span>
            <span className="mx-2">{data.launchApp}</span>
            <small><FontAwesomeIcon icon="external-link-alt" /></small>
          </Button>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">
            <span>{data.text9}</span>
          </Col>
          <Col style={{ lineHeight: '1.35' }}>
            <a href={data.whitepaper5121} className="roboto-normal-mine-shaft-20px"><u>{data.whitepaper}</u></a>
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">
            <img className="icon-3" src={data.twitter3} />
          </Col>
          <Col style={{ lineHeight: '1.35' }}>
            <a href="https://twitter.com/OverlayProtocol" className="roboto-normal-mine-shaft-20px"><u>{data.twitter}</u></a>
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">
            <img className="icon-3" src={data.telegram5121} />
          </Col>
          <Col style={{ lineHeight: '1.35' }}>
            <a href="https://t.me/joinchat/Vh4ghHUTZI53z5OH" className="roboto-normal-mine-shaft-20px"><u>{data.telegram}</u></a>
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={2} className="roboto-bold-bon-jour-24px">
            <img className="icon-4" src={data.medium5121} />
          </Col>
          <Col style={{ lineHeight: '1.35' }}>
            <a href="https://medium.com/overlay-protocol" className="roboto-normal-mine-shaft-20px"><u>{data.medium}</u></a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Links;
