import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';
import { Button, Form, InputGroup } from 'react-bootstrap';

/*
This component will present a form to your users and will allow them to input (and submit) new to-do items. When your
users submit this form, the component will dispatch an action that the addToDo function creates.
 */
let AddToDo = ({ dispatch }) => {
  let input;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

AddToDo = connect()(AddToDo);

export default AddToDo;
