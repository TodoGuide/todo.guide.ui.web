import Todo from '../Model/Todo';

const todos = [
  new Todo({
    title: 'Ability to mark an item as complete',
    start: 10,
    duration: 120,
  }),
  new Todo({
    title: 'Persist data offline',
    start: 15,
    duration: 180,
  }),
  new Todo({
    title: 'Host on GitHub static sites',
    start: 20,
    duration: 90,
  }),
];

export default todos;
