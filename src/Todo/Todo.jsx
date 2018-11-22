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
        Title:&nbsp;
        {todo.title}
      </p>
      <p>
        Estimate: About&nbsp;
        {todo.estimate}
        &nbsp;minutes
      </p>
    </div>);
}

Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel),
};

Todo.defaultProps = {
  todo: null,
};

export default Todo;
