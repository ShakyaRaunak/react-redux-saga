import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

/*
This component will receive the description of the to-do item in question and will use the ListGroup.Item Bootstrap
component to render the item.
 */
const ToDo = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

ToDo.propTypes = {
  title: PropTypes.string.isRequired
};

export default ToDo;
