import moment from "moment";

export default class Schedule extends Array {

  constructor(...todos){
    super(...todos);
    this.update();
  }

  push(todos){
    console.log("Pushing schedule todo", todos)
    const result = super.push(todos);
    this.update();
    return result;
  }

  update(){
    const tomorrow = moment().add(1, "day").startOf('day').toDate();
    const lastIndex = this.length - 1;
    this.sort((a, b) => a.start - b.start);
    this[0].start = new Date();
    for (let i = 0; i <= lastIndex; i++) {
      const current = this[i];
      if (current.end > tomorrow && current.start < tomorrow) {
        current.start = tomorrow;
      }
      if (i < lastIndex) {
        const next = this[i + 1];
        next.start = current.end;
      }
    }
    return this;
  }
}