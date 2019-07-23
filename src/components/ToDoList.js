import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import ToDo from './ToDo';

/*
This component will receive the toDoList, iterate over it, and render (inside a Jumbotron Bootstrap component) a list
of ToDo components.
 */
const ToDoList = ({ toDoList }) => (
  <Jumbotron>
    <ListGroup>
      {toDoList.map((toDo, index) => (
        <ToDo key={index} {...toDo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;
