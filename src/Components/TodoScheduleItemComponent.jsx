import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Models/Todo';

export default class TodoScheduleItemComponent extends Component {
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

  inputValueChange = ({ target }) => {
    const { todo } = this.state;
    todo[target.name] = target.value;
    this.setState({ todo });
  }

  render() {
    const { todo } = this.props;
    return (
      <span>
        <label htmlFor="done">
          <input
            name="done"
            type="checkbox"
            checked={todo.done}
            onChange={this.inputValueChange}
          />
          {todo.title}
        </label>
      </span>
    );
  }
}
