import Todo from '../Model/Todo';

const defaultTodos = [
  {
    title: 'Host on GitHub static sites',
    start: 20,
    estimate: 90,
  },
  {
    title: 'Ability to view completed todos',
    start: 30,
    estimate: 240,
  },
  {
    title: 'Ability to quickly add highest and lowest priority todos',
    start: 40,
    estimate: 240,
  },
];

const storedTodos = JSON.parse(localStorage.getItem('todos'));

const todos = (storedTodos || defaultTodos).map(todo => new Todo(todo));

export default todos;
