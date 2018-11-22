import moment from 'moment';

export default class Schedule extends Array {
  constructor(...todos) {
    super(...todos);
    this.update();
  }

  push(todos) {
    const result = super.push(todos);
    this.update();
    return result;
  }

  notDone() {
    return new Schedule(...this.filter(todo => !todo.done));
  }

  update() {
    if (this.length === 0) return this;
    const tomorrow = moment().add(1, 'day').startOf('day').toDate();
    const lastIndex = this.length - 1;
    this.sort((a, b) => a.start - b.start);
    this[0].start = new Date();
    for (let i = 0; i <= lastIndex; i++) {
      const current = this[i];
      if (current.end > tomorrow && current.start < tomorrow) {
        current.start = tomorrow;
      }
      if (i < lastIndex) {
        this[i + 1].start = current.end;
      }
    }
    return this;
  }
}
