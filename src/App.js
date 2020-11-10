import React from "react"
import { Col, Container, Row } from "reactstrap";
import './App.css';
import Todos from "./components/todos";

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <Todos></Todos>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
