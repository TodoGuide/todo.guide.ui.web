import React, { Component } from "react";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./logo.svg";
import events from "./Data/events"
import Schedule from "./Schedule/Schedule"

class App extends Component {
  state = {
    todos: events.schedule()
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{ display: 'none'}} />
          <h1 className="App-title">Todo Guide!</h1>
        </header>
        <Schedule todos={this.state.todos}></Schedule>
      </div>
    );
  }
}

export default App;
