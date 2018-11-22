import Todo from '../Model/Todo';

const todos = [
  new Todo({
    title: 'Ability to mark an item as complete',
    start: 10,
    estimate: 120,
  }),
  new Todo({
    title: 'Persist data offline',
    start: 15,
    estimate: 180,
  }),
  new Todo({
    title: 'Host on GitHub static sites',
    start: 20,
    estimate: 90,
  }),
];

export default todos;
