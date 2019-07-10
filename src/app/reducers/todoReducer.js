import { combineReducers } from 'redux';
let arr = []
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':

      console.log('state before ', state, 'text ', action.text);
      arr = state.slice();
      arr.splice(action.id, 0, action.text);
      console.log('state after ', state);
      break;
    case 'DELETE':
      arr = state.slice();
      arr.splice(action.payload, 1);
      break;
    default:
      break;
  }
  return arr;
},
  reducers = combineReducers({
    todos: todoReducer
  });

export default reducers;
