import React from 'react';
import PropTypes from 'prop-types';
import TodoModel from '../Model/Todo';

function Todo({ todo }) {
  if (!todo) {
    return null;
  }
  return (
    <div>
      <p>
        Title:
        {todo.title}
      </p>
      <p>
        Duration: About
        {todo.duration}
        minutes
      </p>
    </div>);
}

Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel).isRequired,
};

export default Todo;
