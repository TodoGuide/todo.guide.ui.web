import moment from "moment";

const events = [
  {
    priority: 1,
    duration: 60,
    title: "First Priority"
  },
  {
    priority: 5,
    duration: 90,
    title: "Fifth Priority"
  },
  {
    priority: 3,
    duration: 120,
    title: "Third Priority"
  },
];

function setStart(event, start){
  const startMoment = moment(start);
  event.start = startMoment.toDate();
  event.end = startMoment.add(event.duration, "minutes").toDate();
}

events.schedule = function(){
  if(this.length === 0) return this;
  this.sort(function(a, b){
    return a.priority - b.priority;
  });
  setStart(this[0], Date.now());
  const lastIndex = this.length -1;
  for(let i = 0; i <= lastIndex; i++){
    const current = this[i];
    if(i < lastIndex){
      const next = this[i + 1];
      setStart(next, current.end);
    }
    current.priority = current.start;
  }
  console.log(this)
  return this;
}


export default events;
