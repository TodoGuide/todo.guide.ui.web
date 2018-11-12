import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Todo from "../Todo/Todo"
import TodoItem from "../Todo/TodoItem"
import Modal from 'react-modal';

// Setup
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const Calendar = withDragAndDrop(BigCalendar);
Modal.setAppElement('#root');

const modalStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '1000 !important'
  }
};

class Schedule extends Component {

  constructor(props){
    super(props);
    this.state = { todos: props.todos, currentTodo: null }
  }

  calendarOnEventResize = ({ event, start, end}) => {
    event.duration = moment.duration(moment(end).diff(moment(start))).asMinutes();
    event.start = start;
    event.end = end;
    this.setState({ todos: this.state.todos.schedule() });
  };

  calendarOnEventDrop = ({ event, start, end, allDay }) => {
    event.start = start;
    event.end = end;
    this.setState({ todos: this.state.todos.schedule() });
  };

  calendarOnSelectSlot = ({ start, end }) => {
    if(this.state.currentTodo) return;
    const title = window.prompt("What's your todo item?")
    this.state.todos.push(new Todo({
      start: start,
      duration: moment.duration(moment(end).diff(moment(start))).asMinutes(),
      title: title
    }));
    this.setState({todos: this.state.todos.schedule()});
  };

  calendarOnSelectEvent = (event) => {
    this.setState({ currentTodo: event });
  }

  todoOnRequestClose() {
    // todo: Save currentTodo changes
    this.setState({currentTodo: null});
  }

  render(){
    console.log("Rendering Schedule", this.state.todos);
    return (
      <div>
        <Modal
          isOpen={!!this.state.currentTodo}
          onRequestClose={this.todoOnRequestClose}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <TodoItem todo={this.state.currentTodo} />
          <button onClick={this.todoOnRequestClose.bind(this)}>close</button>
        </Modal>
        <Calendar
          defaultDate={new Date()}
          defaultView="day"
          events={this.state.todos}
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