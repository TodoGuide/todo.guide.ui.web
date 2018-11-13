import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Todo from "../Todo/Todo"
import TodoModel from "../Model/Todo"
import Modal from 'react-modal';

// Setup
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const Calendar = withDragAndDrop(BigCalendar);
Modal.setAppElement('#root');

const modalStyles = {
  content : {
    top         : '25%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)',
    zIndex      : '1000 !important'
  }
};

class Schedule extends Component {

  constructor({ schedule }){
    super({ schedule });
    this.state = { schedule: schedule, currentTodo: null }
  }

  calendarOnEventResize = ({ event, start, end}) => {
    event.duration = moment.duration(moment(end).diff(moment(start))).asMinutes();
    event.start = start;
    this.setState({ state: this.state.schedule.update() });
  };

  calendarOnEventDrop = ({ event, start }) => {
    event.start = start;
    this.setState({ state: this.state.schedule.update() });
  };

  calendarOnSelectSlot = ({ start, end }) => {
    if(this.state.currentTodo) return;
    const title = window.prompt("What's your todo item?")
    if(! title) return;
    this.state.schedule.push(new TodoModel({
      start: start,
      duration: moment.duration(moment(end).diff(moment(start))).asMinutes(),
      title: title
    }));
    this.setState({ state: this.state.schedule.update() });
  };

  calendarOnSelectEvent = (event) => {
    this.setState({ currentTodo: event });
  }

  todoOnRequestClose() {
    // todo: Save currentTodo changes
    this.setState({ currentTodo: null });
  }

  render(){
    return (
      <div>
        <Modal
          isOpen={!!this.state.currentTodo}
          onRequestClose={this.todoOnRequestClose}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <Todo todo={this.state.currentTodo} />
          <button onClick={this.todoOnRequestClose.bind(this)}>Close</button>
        </Modal>
        <Calendar
          defaultDate={new Date()}
          defaultView="day"
          events={this.props.schedule}
          onEventDrop={this.calendarOnEventDrop}
          onEventResize={this.calendarOnEventResize}
          onSelectEvent={this.calendarOnSelectEvent}
          onSelectSlot={this.calendarOnSelectSlot}
          localizer={localizer}
          step={ this.props.increment || 15}
          selectable
          resizable
          style={{ height: "100vh" }}
        />
      </div>)
  }
}

export default Schedule;