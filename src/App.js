import React, { Component } from 'react';
import { Button, Container, Col, Row, ListGroup } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

library.add(faExternalLinkAlt);

class App extends Component {

  // TODO: state with stats.totalSupply, tvl, spot liquidity, staked yield

  render() {
    return (
      <div className="App p-5">
        <Container fluid className="pb-4">
          <img className="overlay-logo-1" src={AppData.overlayLogo1} />
        </Container>
        <Container fluid className="pt-3 px-0">
          <Row>
            <Col lg={true}>
              <Container className="py-3 px-0" style={{ width: '256px' }}>
                <div>
                  <h1 className="roboto-black-mine-shaft-36px m-0">About</h1>
                  <img className="line-3" src={AppData.line3} />
                </div>
                <div className="d-flex flex-column">
                  <Row className="py-2">
                    <Col xs={2} className="roboto-bold-bon-jour-24px">{AppData.number2}</Col>
                    <Col className="roboto-normal-mine-shaft-16px" style={{ lineHeight: '1.35' }}>{AppData.text1a}</Col>
                  </Row>
                  <Row className="py-2">
                    <Col xs={2} className="roboto-bold-bon-jour-24px">{AppData.number4}</Col>
                    <Col className="roboto-normal-mine-shaft-16px" style={{ lineHeight: '1.35' }}>{AppData.text1b}</Col>
                  </Row>
                  <Row className="py-2">
                    <Col xs={2} className="roboto-bold-bon-jour-24px">{AppData.number6}</Col>
                    <Col className="roboto-normal-mine-shaft-16px" style={{ lineHeight: '1.35' }}>{AppData.text1c}</Col>
                  </Row>
                </div>
              </Container>
            </Col>
            <Col lg={true}>
              <Container className="py-3 px-0" style={{ width: '256px' }}>
                <div>
                  <h1 className="roboto-black-mine-shaft-36px m-0">Links</h1>
                  <img className="line-3" src={AppData.line3} />
                </div>
                <div className="d-flex flex-column">
                  <Row className="p-2 mb-2">
                    <Button href="https://overlay.exchange/" block className="shadow btn-light roboto-normal-mine-shaft-16px" target="_blank">
                      <span>{AppData.text10}</span>
                      <span className="mx-2">{AppData.buttonPrimaryProps.launchApp}</span>
                      <small><FontAwesomeIcon icon="external-link-alt" /></small>
                    </Button>
                  </Row>
                  <Row className="py-2">
                    <Col xs={2} className="roboto-bold-bon-jour-24px">
                      <img className="icon-3" src={AppData.twitter3} />
                    </Col>
                    <Col style={{ lineHeight: '1.35' }}>
                      <a href="https://twitter.com/OverlayProtocol" className="roboto-normal-mine-shaft-20px"><u>{AppData.twitter}</u></a>
                    </Col>
                  </Row>
                  <Row className="py-2">
                    <Col xs={2} className="roboto-bold-bon-jour-24px">
                      <img className="icon-4" src={AppData.medium5121} />
                    </Col>
                    <Col style={{ lineHeight: '1.35' }}>
                      <a href="https://medium.com/overlay-protocol" className="roboto-normal-mine-shaft-20px"><u>{AppData.medium}</u></a>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
            <Col lg={true}>
              <Container className="py-3 px-0" style={{ width: '256px' }}>
                <div>
                  <h1 className="roboto-black-mine-shaft-36px m-0">Stats</h1>
                  <img className="line-3" src={AppData.line3} />
                </div>
                <div className="d-flex flex-column">
                  <div className="py-2">
                    <div className="roboto-bold-mine-shaft-24px"><u>{AppData.totalSupply}</u></div>
                    <div className="py-1 roboto-normal-mine-shaft-16px">{AppData.x102482987Ovl3}</div>
                  </div>
                  <div className="py-2">
                    <div className="roboto-bold-mine-shaft-24px"><u>{AppData.tvl}</u></div>
                    <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x102482987Ovl2}</div>
                    <small className="roboto-normal-mine-shaft-16px text-muted">{AppData.x102482987OvlUsd2}</small>
                  </div>
                  <div className="py-2">
                    <div className="roboto-bold-mine-shaft-24px"><u>{AppData.liquidity}</u></div>
                    <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x102482987Ovl4}</div>
                    <small className="roboto-normal-mine-shaft-16px text-muted">{AppData.x102482987OvlUsd4}</small>
                  </div>
                  <div className="py-2">
                    <div className="roboto-bold-mine-shaft-24px"><u>{AppData.staked}</u></div>
                    <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x102482987OvlAmount5}</div>
                    <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x102482987OvlApy5}</div>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={true}>
              <Container className="py-3 px-0" style={{ width: '256px' }}>
                <div>
                  <h1 className="roboto-black-mine-shaft-36px m-0">Streams</h1>
                  <img className="line-3" src={AppData.line3} />
                </div>
                <div className="d-flex flex-column">
                  <Row className="py-2 align-items-center">
                    <Col className="roboto-bold-mine-shaft-24px">
                      <div className="py-2">
                        <div className="roboto-bold-mine-shaft-18px"><u>{AppData.cardHeader2Props.totalSupply}</u></div>
                        <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x01516Eth}</div>
                      </div>
                    </Col>
                    <Col>
                      <img className="rectangle-15" src={AppData.rectangle15} />
                    </Col>
                  </Row>
                  <Row className="py-2 align-items-center">
                    <Col className="roboto-bold-mine-shaft-24px">
                      <div className="py-2">
                        <div className="roboto-bold-mine-shaft-18px"><u>{AppData.cardHeader24Props.totalSupply}</u></div>
                        <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x0005743Eth}</div>
                      </div>
                    </Col>
                    <Col>
                      <img className="rectangle-15" src={AppData.rectangle18} />
                    </Col>
                  </Row>
                  <Row className="py-2 align-items-center">
                    <Col className="roboto-bold-mine-shaft-24px">
                      <div className="py-2">
                        <div className="roboto-bold-mine-shaft-18px"><u>{AppData.cardHeader23Props.totalSupply}</u></div>
                        <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x001263Eth}</div>
                      </div>
                    </Col>
                    <Col>
                      <img className="rectangle-15" src={AppData.rectangle19} />
                    </Col>
                  </Row>
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
                  <Row className="py-2 align-items-center">
                    <Col className="roboto-bold-mine-shaft-24px">
                      <div className="py-2">
                        <div className="roboto-bold-mine-shaft-18px"><u>{AppData.cardHeader25Props.totalSupply}</u></div>
                        <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x3095Eth}</div>
                      </div>
                    </Col>
                    <Col>
                      <img className="rectangle-15" src={AppData.rectangle17} />
                    </Col>
                  </Row>
                  <Row className="py-2 align-items-center">
                    <Col className="roboto-bold-mine-shaft-24px">
                      <div className="py-2">
                        <div className="roboto-bold-mine-shaft-18px"><u>{AppData.cardHeader22Props.totalSupply}</u></div>
                        <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x007131Eth}</div>
                      </div>
                    </Col>
                    <Col>
                      <img className="rectangle-15" src={AppData.rectangle16} />
                    </Col>
                  </Row>
                  <Row className="py-2 align-items-center">
                    <Col className="roboto-bold-mine-shaft-24px">
                      <div className="py-2">
                        <div className="roboto-bold-mine-shaft-18px"><u>{AppData.cardHeader26Props.totalSupply}</u></div>
                        <div className="pt-1 roboto-normal-mine-shaft-16px">{AppData.x000Eth}</div>
                      </div>
                    </Col>
                    <Col>
                      <img className="rectangle-15" src={AppData.rectangle20} />
                    </Col>
                  </Row>
                </div>
              </Container>
            </Col>
            <Col lg={true} />
          </Row>
        </Container>
      </div>
    );
  }
}

const cardHeader1Data = {
  links: "Links",
  line1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-1@2x.svg",
};

const cardHeader12Data = {
  links: "Stats",
  line1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-1@2x.svg",
};

const cardHeader2Data = {
  totalSupply: "AAVE-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader22Data = {
  totalSupply: "UNI-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader23Data = {
  totalSupply: "SNX-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader24Data = {
  totalSupply: "SUSHI-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader25Data = {
  totalSupply: "YFI-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const cardHeader26Data = {
  totalSupply: "OVL-ETH",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
};

const buttonPrimaryData = {
  launchApp: "Launch App",
};

const AppData = {
  about: "About",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  number: "01",
  number2: "01",
  number3: "02",
  number4: "02",
  number5: "03",
  number6: "03",
  number7: "04",
  number8: "05",
  writings: "Writings",
  streams: "Streams",
  technical: "Technical",
  why: "Why",
  overlayLogo1: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/overlay-logo-1@2x.png",
  text1a: "A cryptocurrency that lets you long or short DeFi data streams.",
  text1b: "Dynamically mints or burns to compensate traders for their profit or loss.",
  text1c: "Governs the system so successful traders decide the trajectory of the protocol.",
  whatIsOverlay: "What is Overlay?",
  text2: "A deep dive of our metrics",
  text3: "Tokenomics of Overlay",
  text4: "Our mission and values",
  text5: "Another article link",
  spanText: <>We believe in open-source.<br />Free and fair internet.<br />Other things.<br /></>,
  spanText2: "Read about it",
  text7: "OIP is the place to contribute to the development of the protocol.",
  text8: "Where all the Noob Noobs go.",
  oip: "OIP",
  github: "Github",
  line6: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-6@2x.svg",
  ourStakeholders: "Our stakeholders",
  polychain: "Polychain",
  x1Kx: "1kx",
  parafi: "ParaFi",
  metacartel: "Metacartel",
  theLao: "The LAO",
  line11: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-11@2x.svg",
  line4: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-4@1x.svg",
  line5: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-5@2x.svg",
  line12: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-12@2x.svg",
  totalSupply: "Total supply",
  tvl: "TVL",
  liquidity: "Spot liquidity",
  staked: "Staked OVL",
  otherData: "Other data",
  x102482987Ovl: "1,024,829.87 OVL",
  x01516Eth: "0.1516 ETH",
  x007131Eth: "0.007131 ETH",
  x001263Eth: "0.01263 ETH",
  x0005743Eth: "0.005743 ETH",
  x000Eth: "- ETH",
  x3095Eth: "30.95 ETH",
  x102482987Ovl2: "124,056.17 OVL",
  x102482987OvlUsd2: "2,480,562 USD",
  x102482987Ovl3: "1,024,829.87 OVL",
  x102482987Ovl4: "263,056.17 OVL",
  x102482987OvlUsd4: "5,260,562 USD",
  x102482987OvlAmount5: "Amount: 263,056.17 OVL",
  x102482987OvlApy5: "APY: 27.67123%",
  line2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
  line7: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
  line8: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-2@2x.svg",
  overlayLogoCircles1: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/overlay-logo-circles%201.png?alt=media",
  github1: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/github%201.png?alt=media",
  text9: "📃",
  whitepaperV2: "Docs",
  telegram: "Telegram",
  discord: "Discord",
  medium: "Medium",
  medium5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Medium-512%201.png?alt=media",
  twitter: "Twitter",
  telegram5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Telegram-512%201.png?alt=media",
  discord5121: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/91_Discord_logo_logos-512%201(1).png?alt=media",
  twitter3: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/twitter%203.png?alt=media",
  rectangle15: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-15.png?alt=media",
  rectangle18: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-18.png?alt=media",
  rectangle17: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-17.png?alt=media",
  rectangle16: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-16.png?alt=media",
  rectangle19: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-19.png?alt=media",
  rectangle20: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-20.png?alt=media",
  vector: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/vector@2x.png",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/vector-1@2x.svg",
  text10: "😸",
  cardHeader1Props: cardHeader1Data,
  cardHeader12Props: cardHeader12Data,
  cardHeader2Props: cardHeader2Data,
  cardHeader22Props: cardHeader22Data,
  cardHeader23Props: cardHeader23Data,
  cardHeader24Props: cardHeader24Data,
  cardHeader25Props: cardHeader25Data,
  cardHeader26Props: cardHeader26Data,
  buttonPrimaryProps: buttonPrimaryData,
};

export default App;
