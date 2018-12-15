import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Models/Todo';

class TodoComponent extends Component {
  static defaultProps = {
    todo: null,
  };

  static propTypes = {
    todo: PropTypes.instanceOf(Todo),
  };

  constructor(props) {
    super(props);
    this.state = { todo: props.todo };
  }

  // componentDidMount() {
  //   this.title.focus();
  // }

  inputValueChange = ({ target }) => {
    const { todo } = this.state;
    todo[target.name] = target.value;
    this.setState({ todo });
  }

  render() {
    const { todo } = this.state;
    if (!todo) {
      return null;
    }
    return (
      <div>
        <h2>What needs to get done?</h2>
        <p>
          Title:&nbsp;
          <input
            name="title"
            type="text"
            value={todo.title}
            onChange={this.inputValueChange.bind(this)}
            style={{ width: 500 }}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </p>
        <p>
          Estimate: About&nbsp;
          <input
            name="estimate"
            type="text"
            value={todo.estimate}
            onChange={this.inputValueChange.bind(this)}
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
              onChange={this.inputValueChange.bind(this)}
            />
            &nbsp;
            Done
          </label>
        </p>
      </div>);
  }
}

export default TodoComponent;
