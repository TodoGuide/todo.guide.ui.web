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
    event.duration = moment.duration(moment(end).diff(moment(start))).asMinutes();
    event.priority = start;
    event.start = start;
    event.end = end;
    this.setState({ events: this.state.events.schedule() });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    event.priority = start;
    event.start = start;
    event.end = end;
    this.setState({ events: this.state.events.schedule() });
  };

  onSelectSlot = ({ start, end }) => {
    const title = window.prompt("What's your todo item?")
    this.state.events.push({
      priority: start,
      duration: moment.duration(moment(end).diff(moment(start))).asMinutes(),
      title
    });
    this.setState({events: this.state.events.schedule()});
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
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.onSelectSlot}
          localizer={localizer}
          step={15}
          selectable
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
