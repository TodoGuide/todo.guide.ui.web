import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar'

class App extends Component {
  render() {
    return (
      <div className="App">
        Todo.Guide! w/ Cal
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
