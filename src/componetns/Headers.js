import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Headers = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Star Wars</Navbar.Brand>
         
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
