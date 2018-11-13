import moment from "moment";

export default class Todo {
  constructor({title, duration, start}){
    this.title = title || "New task";
    this.duration = duration || 60;
    this.start = start || Date.now();
  }
  
  get end(){
    return moment(this.start).add(this.duration, "minutes").toDate()
  }

  set end(end){
    this.duration = moment.duration(moment(this.end).diff(this.start)).asMinutes();
  }
}