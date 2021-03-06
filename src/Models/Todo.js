import moment from 'moment';

export default class Todo {
  constructor({
    title, estimate, start, done,
  }) {
    this.title = title || '';
    this.estimate = estimate || 60;
    this.start = start || Date.now();
    this.done = done || false;
  }

  get end() {
    return moment(this.start).add(this.estimate, 'minutes').toDate();
  }

  set end(end) {
    this.estimate = moment.duration(moment(this.end).diff(this.start)).asMinutes();
  }
}
