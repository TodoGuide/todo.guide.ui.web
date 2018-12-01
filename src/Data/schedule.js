import Todo from '../Model/Todo';

const todos = [
  new Todo({
    title: 'Ability to mark an item as complete',
    start: 10,
    estimate: 120,
    done: true,
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
  new Todo({
    title: 'Ability to view completed todos',
    start: 30,
    estimate: 240,
  }),
  new Todo({
    title: 'Ability to quickly add highest and lowest priority todos',
    start: 40,
    estimate: 240,
  }),
];

export default todos;
