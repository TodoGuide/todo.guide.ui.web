import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoModel from '../Model/Todo';

class Todo extends Component {
  static defaultProps = {
    todo: null,
  };

  static propTypes = {
    todo: PropTypes.instanceOf(TodoModel),
  };

  constructor(props) {
    super(props);
    this.state = { todo: props.todo };
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
          <label htmlFor="done">
            <input
              name="done"
              id="done"
              type="checkbox"
              checked={todo.done}
              onChange={this.doneChange.bind(this)}
            />
            &nbsp;
            Done
          </label>
        </p>
      </div>);
  }
}

export default Todo;
