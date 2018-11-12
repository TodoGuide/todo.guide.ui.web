import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Todo from "../Todo/Todo"

// Setup
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const Calendar = withDragAndDrop(BigCalendar);

class Schedule extends Component {

  constructor(props){
    super(props);
    this.state = { todos: props.todos }
  }

  onEventResize = ({ event, start, end}) => {
    event.duration = moment.duration(moment(end).diff(moment(start))).asMinutes();
    event.start = start;
    event.end = end;
    this.setState({ todos: this.state.todos.schedule() });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    event.start = start;
    event.end = end;
    this.setState({ todos: this.state.todos.schedule() });
  };

  onSelectSlot = ({ start, end }) => {
    const title = window.prompt("What's your todo item?")
    this.state.todos.push(new Todo({
      start: start,
      duration: moment.duration(moment(end).diff(moment(start))).asMinutes(),
      title: title
    }));
    this.setState({todos: this.state.todos.schedule()});
  };

  onSelectEvent = (event) => {
    alert(event.title)
  }

  render(){
    console.log("Rendering Schedule", this.state.todos);
    return (
      <Calendar
        defaultDate={new Date()}
        defaultView="day"
        events={this.state.todos}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        onSelectEvent={this.onSelectEvent}
        onSelectSlot={this.onSelectSlot}
        localizer={localizer}
        step={ this.props.increment || 15}
        selectable
        resizable
        style={{ height: "100vh" }}
      />)
  }
}

export default Schedule;