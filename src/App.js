import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./logo.svg";

const localizer = Calendar.momentLocalizer(moment) // or globalizeLocalizer
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "hours")),
        title: "Scaffold the calendar"
      },
      {
        start: new Date(moment().add(1, "hours")),
        end: new Date(moment().add(30, "minutes")),
        title: "Do other stuff"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
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
        <DnDCalendar
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
