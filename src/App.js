import React, { Component } from 'react';
import { Button, Container, Col, Row, ListGroup } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';
import Header from './components/header';
import About from './components/about';
import Links from './components/links';
import Stats from './components/stats';
import Streams from './components/streams';

library.add(faExternalLinkAlt);

class App extends Component {

  // TODO: state with stats.totalSupply, tvl, spot liquidity, staked yield

  render() {
    return (
      <div className="App p-5">
        <Header />
        <Container fluid className="pt-3 px-0">
          <Row>
            <Col lg={true}>
              <About />
            </Col>
            <Col lg={true}>
              <Links />
            </Col>
            <Col lg={true}>
              <Stats />
            </Col>
          </Row>
        </Container>
        <Streams />
      </div>
    );
  }
}

export default App;
