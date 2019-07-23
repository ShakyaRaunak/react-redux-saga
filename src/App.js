import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <AddToDo />
            <ToDoListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
