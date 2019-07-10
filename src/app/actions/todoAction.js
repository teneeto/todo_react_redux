const addTodo= (text) => {
  return {
    type: 'ADD',
    text
  };
};
const deleteTodo = (id) => {
  return {
    type: 'DELETE',
    payload: id
  };
};

export {addTodo, deleteTodo};
