export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST'; // make your React app load the to-do list from an external server
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST'; // make your React app render the to-do list it just loaded

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime().toString(),
      title
    }
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}
