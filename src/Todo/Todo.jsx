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
    const { todo } = this.state;
    todo.done = target.checked;
    this.setState({ todo });
  }

  estimateChange({ target }) {
    const { todo } = this.state;
    todo.estimate = Number.parseInt(target.value, 10) || todo.estimate;
    this.setState({ todo });
  }

  titleChange({ target }) {
    const { todo } = this.state;
    todo.title = target.value;
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
          <input
            name="title"
            type="text"
            value={todo.title}
            onChange={this.titleChange.bind(this)}
            style={{ width: 500 }}
          />
        </p>
        <p>
          Estimate: About&nbsp;
          <input
            name="estimate"
            type="text"
            value={todo.estimate}
            onChange={this.estimateChange.bind(this)}
            style={{ width: 50, textAlign: 'center' }}
          />
          &nbsp;minutes remaining
        </p>
        <p>
          <label htmlFor="done">
            <input
              name="done"
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
