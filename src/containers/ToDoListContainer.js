import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

/*
After defining the two presentational components, you will have to map the state of the app to the props of the ToDoList
component. To do this, create a file called ToDoListContainer.js inside the ./src/containers directory.
 */
const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

/*
This will make sure Redux maps the toDoList object available on its store to the toDoList property that the ToDoList
presentational component uses.
 */

export default ToDoListContainer;
