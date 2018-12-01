import Todo from '../Model/Todo';

const defaultTodos = [
  {
    title: 'Ability to mark an item as complete',
    start: 10,
    estimate: 120,
    done: true,
  },
  {
    title: 'Persist data offline',
    start: 15,
    estimate: 180,
  },
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
