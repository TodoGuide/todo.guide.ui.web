import moment from "moment";
import Todo from "../Todo/Todo";

const events = [
  new Todo({
    title: "Ability to mark an item as complete",
    priority: 10,
    duration: 120,
  }),
  new Todo({
    title: "Persist data offline",
    priority: 15,
    duration: 180,
  }),
  new Todo({
    title: "Host on GitHub static sites",
    priority: 20,
    duration: 90,
  }),
];

events.schedule = function(){
  if(this.length === 0) return this;
  this.sort(function(a, b){
    return a.start - b.start;
  });
  this[0].start = new Date();
  const lastIndex = this.length -1;
  for(let i = 0; i <= lastIndex; i++){
    const current = this[i];
    if(i < lastIndex){
      const next = this[i + 1];
      next.start = current.end;
    }
    current.start = current.start;
  }
  console.log(this)
  return this;
}


export default events;
