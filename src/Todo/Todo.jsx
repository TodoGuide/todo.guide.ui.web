import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoModel from '../Model/Todo';

class Todo extends Component {
  constructor({ todo }) {
    super({ todo });
    this.state = { todo };
  }

  doneChange({ target }) {
    console.debug("doneChange called", target);
    const { todo } = this.state;
    todo.done = target.checked;
    this.setState({ todo });
  }

  render() {
    const { todo } = this.state;
    if (!todo) {
      return null;
    }
    return (
      <div>
        <p>
          Title:&nbsp;
          {todo.title}
        </p>
        <p>
          Estimate: About&nbsp;
          {todo.estimate}
          &nbsp;minutes
        </p>
        <p>
          <input
            name="done"
            type="checkbox"
            checked={todo.done}
            onChange={this.doneChange.bind(this)}
          />
        </p>
      </div>);
  }
}

Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel),
};

Todo.defaultProps = {
  todo: null,
};

export default Todo;
