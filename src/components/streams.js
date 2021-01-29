/*
Copied and modified from KP3R/yearn code:
https://github.com/keep3r-network/Uniquote/blob/master/src/components/feeds/feeds.jsx

See '../stores/kp3r/store.js'
*/

import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {
  GET_FEEDS,
  FEEDS_RETURNED,
  FEEDS_UPDATED,
} from '../stores/constants';
import Store from '../stores/kp3r/store';

const emitter = Store.emitter;
const dispatcher = Store.dispatcher;
const store = Store.store;


const data = {
  streams: "Streams",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  grid: [
    [
      {
        ticker: "AAVE-ETH",
        address: "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f",
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-15.png?alt=media",
      },
      {
        ticker: "SUSHI-ETH",
        address: "0xCE84867c3c02B05dc570d0135103d3fB9CC19433",
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-18.png?alt=media",
      },
    ],
    [
      {
        ticker: "YFI-ETH",
        address: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28",
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-17.png?alt=media",
      },
      {
        ticker: "UNI-ETH",
        address: "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-16.png?alt=media",
      },
    ],
    [
      {
        ticker: "SNX-ETH",
        address: "0x43AE24960e5534731Fc831386c07755A2dc33D47",
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-19.png?alt=media",
      },
      {
        ticker: "OVL-ETH",
        address: "",
        img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-20.png?alt=media",
      },
    ]
  ]
};

class Streams extends Component {

  constructor(props) {
    super();

    const feeds = this.feedsToMap(store.getStore('feeds'));

    this.state = {
      feeds: feeds
    }

    dispatcher.dispatch({ type: GET_FEEDS, content: {} });
  }

  componentWillMount() {
    emitter.on(FEEDS_UPDATED, this.feedsReturned);
    emitter.on(FEEDS_RETURNED, this.feedsReturned);
  };

  componentWillUnmount() {
    emitter.removeListener(FEEDS_UPDATED, this.feedsReturned);
    emitter.removeListener(FEEDS_RETURNED, this.feedsReturned);
  };

  feedsToMap = (feeds) => {
    // converts feeds array to map
    const feedsMap = {};
    if (feeds) {
      feeds.forEach((feed) => {
        if (typeof feed != 'object' || !('address' in feed)) {
          return;
        }
        feedsMap[feed.address] = feed;
      });
    }
    return feedsMap;
  }

  feedsReturned = () => {
    // create a feeds map then set
    this.setState({ feeds: this.feedsToMap(store.getStore('feeds')) });
  }

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

  renderStream = (stream) => (
    <Row className="py-2 align-items-center">
      <Col xs={5}>
        <div className="py-2">
          <div className="roboto-bold-mine-shaft-16px"><u>{stream.ticker}</u></div>
          <div className="pt-1 roboto-normal-mine-shaft-16px">{this.renderPrice(stream.address)}</div>
        </div>
      </Col>
      <Col>
        <img className="rectangle-15" src={stream.img} />
      </Col>
    </Row>
  );

  // Fetches ETH quote price from store given priceId
  renderPrice = (address) => {
    const { feeds } = this.state;
    if (typeof feeds != 'object' || !address || !(address in feeds)) {
      return "- ETH";
    }
    return `${feeds[address].consult.consult0To1.toFixed(4)} ETH`;
  }
}

export default Streams;
