import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction'

class Todo extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  };

  addTask() {
    if (this.refs.task.value.length > 0) {
      this.props.dispatch(addTodo(this.refs.task.value));
      this.setState({ value: '' });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="">
          <input type="text" ref="task" className="textInput" placeholder="What is your Plan Today?" required />
          <button className="btn" onClick={this.addTask}>+</button>
        </div>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return (
    dispatch
  );
}

export default connect(mapDispatchToProps)(Todo);
