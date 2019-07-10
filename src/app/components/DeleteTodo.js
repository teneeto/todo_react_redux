import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoAction'

class DeleteTodo extends React.Component {
  constructor() {
    super();
    this.deleteTask = this.deleteTask.bind(this);
  };

  deleteTask() {
    this.props.dispatch(deleteTodo(this.props.id));
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.todo}
        </td>
        <td className="">
          <button className="" onClick={this.deleteTask}>Delete</button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return (
    dispatch
  );
}

export default connect(mapDispatchToProps)(DeleteTodo);
