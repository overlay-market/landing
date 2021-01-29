import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const data = {
  stakeholders: "Stakeholders",
  line3: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/line-3@2x.svg",
  names: [],
};

class Stakeholders extends Component {
  render = () => (
    <Container className="py-3 px-0" style={{ width: '256px' }}>
      <div>
        <h1 className="roboto-black-mine-shaft-36px m-0">{data.stakeholders}</h1>
        <img className="line-3" src={data.line3} />
      </div>
      <div className="d-flex flex-column py-2">
        {data.names.map((name) => (
          <span className="roboto-normal-mine-shaft-16px">{name}</span>
        ))}
      </div>
    </Container>
  );
}

export default Stakeholders;
