import Todo from "../Todo/Todo";
import moment from "moment"

const events = [
  new Todo({
    title: "Ability to mark an item as complete",
    start: 10,
    duration: 120,
  }),
  new Todo({
    title: "Persist data offline",
    start: 15,
    duration: 180,
  }),
  new Todo({
    title: "Host on GitHub static sites",
    start: 20,
    duration: 90,
  }),
];

events.schedule = function(){
  if(this.length === 0) return this;
  this.sort(function(a, b){
    return a.start - b.start;
  });
  const tomorrow = moment().add(1, "day").startOf('day').toDate();
  console.log("Tomorrow", tomorrow)
  this[0].start = new Date();
  const lastIndex = this.length -1;
  for(let i = 0; i <= lastIndex; i++){
    const current = this[i];
    if(current.end > tomorrow){
      current.start = tomorrow;
      console.log("Moved todo to tomorrow", current)
    }
    if(i < lastIndex){
      const next = this[i + 1];
      next.start = current.end;
    }
  }
  return this;
}

export default events;