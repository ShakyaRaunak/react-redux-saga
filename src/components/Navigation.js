import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/*
You are using styled-components to create a component called NavigationBar that is a div with some CSS styles.
More specifically, you are defining that this div will have 15px of margin on its bottom and that it will have a
lightgray background.
 */
const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New
    </Link>
  </NavigationBar>
);
