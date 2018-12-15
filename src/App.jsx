import React, { Component } from 'react';
import Modal from 'react-modal';

import './App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import logo from './logo.svg';
import todos from './Data/schedule';
import Schedule from './Models/Schedule';
import ScheduleComponent from './Components/ScheduleComponent';

Modal.setAppElement('#root'); // Modals!

const scheduleData = new Schedule(...todos);

class App extends Component {
  state = {
    schedule: scheduleData,
  };


  handleScheduleChange = () => {
    const { schedule } = this.state;
    localStorage.setItem(' todos', JSON.stringify(schedule.update()));
    this.setState({ schedule });
  }

  render() {
    const { schedule } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{ display: 'none' }} />
          <h1 className="App-title">Todo Guide!</h1>
        </header>
        <ScheduleComponent
          schedule={schedule}
          onScheduleChanged={this.handleScheduleChange}
        />
      </div>
    );
  }
}

export default App;
