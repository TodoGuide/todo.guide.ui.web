import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./logo.svg";
import events from "./Data/events"

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const Calendar = withDragAndDrop(BigCalendar);

class App extends Component {
  state = {
    events: events.schedule()
  };

  onEventResize = ({ event, start, end}) => {
    this.setState(state => {
      console.log(event);
      event.duration = moment.duration(moment(end).diff(moment(start))).asMinutes();
      event.priority = start;
      event.start = start;
      event.end = end;
      return { events: state.events.schedule() };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
    this.setState(state => {
      event.priority = start;
      event.start = start;
      event.end = end;
      return { events: state.events.schedule() };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{ display: 'none'}} />
          <h1 className="App-title">Todo Guide!</h1>
        </header>
        <p className="App-intro">
          Give me your todo list, I schedule it for you
        </p>
        <Calendar
          defaultDate={new Date()}
          defaultView="day"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          localizer={localizer}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
