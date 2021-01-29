import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const data = {
  overlayLogo: "https://anima-uploads.s3.amazonaws.com/projects/6010bd7cd7c07e842199586a/releases/6010beeddecee5e9c798bed3/img/overlay-logo-1@2x.png",
};

class Header extends Component {
  render = () => (
    <Container fluid className="pb-4">
      <img className="overlay-logo-1" src={data.overlayLogo} />
    </Container>
  );
}

export default Header;
