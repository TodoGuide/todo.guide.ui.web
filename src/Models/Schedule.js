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
    return [].concat(this).filter(todo => !todo.done);
  }

  update() {
    console.log('Updating schedule', this);
    const notDone = this.notDone().sort((a, b) => a.start - b.start);
    const lastIndex = notDone.length - 1;
    if (lastIndex === -1) return this;

    console.log('Rescheduling incomplete todos', notDone);

    const tomorrow = moment().add(1, 'day').startOf('day').toDate();

    console.log('Adjusting first item start', notDone[0]);
    notDone[0].start = new Date();
    console.log('Adjusted first item start', notDone[0]);

    for (let i = 0; i <= lastIndex; i++) {
      const current = notDone[i];
      if (current.end > tomorrow && current.start < tomorrow) {
        current.start = tomorrow;
      }
      if (i < lastIndex) {
        notDone[i + 1].start = current.end;
      }
    }

    console.log('Updated schedule', this);
    return this;
  }
}
