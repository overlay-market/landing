import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Links from './components/links';
import Stakeholders from './components/stakeholders';
import Stats from './components/stats';
import Streams from './components/streams';
import Technical from './components/technical';


class App extends Component {

  render() {
    return (
      <div className="App p-5">
        <Header />
        <Container fluid className="mt-3 px-0">
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
        <Container fluid className="mt-3 px-0">
          <Row>
            <Col lg={true}>
              <Technical />
            </Col>
            <Col lg={true}>
              <Stakeholders />
            </Col>
            <Col lg={true} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
