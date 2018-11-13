import React, { Component } from 'react';

import './App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import logo from './logo.svg';
import todos from './Data/schedule';
import Schedule from './Schedule/Schedule';
import ScheduleModel from './Model/Schedule';

class App extends Component {
  state = {
    schedule: new ScheduleModel(...todos),
  };

  render() {
    const { schedule } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{ display: 'none' }} />
          <h1 className="App-title">Todo Guide!</h1>
        </header>
        <Schedule schedule={schedule} />
      </div>
    );
  }
}

export default App;
