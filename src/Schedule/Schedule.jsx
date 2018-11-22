import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Modal from 'react-modal';
import Todo from '../Todo/Todo';
import TodoModel from '../Model/Todo';
import ScheduleModel from '../Model/Schedule';

// Setup
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const Calendar = withDragAndDrop(BigCalendar);
Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000 !important',
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
class Schedule extends Component {
  static propTypes = {
    increment: PropTypes.number,
    schedule: PropTypes.instanceOf(ScheduleModel).isRequired,
  }

  static defaultProps = {
    increment: 15,
  };

  constructor({ schedule }) {
    super({ schedule });
    this.state = { schedule, currentTodo: null };
  }

  calendarOnEventResize = ({ event, start, end }) => {
    event.duration = moment.duration(moment(end).diff(moment(start))).asMinutes();
    event.start = start;
    const { schedule } = this.state;
    this.setState({ schedule: schedule.update() });
  };

  calendarOnEventDrop = ({ event, start }) => {
    event.start = start;
    const { schedule } = this.state;
    this.setState({ schedule: schedule.update() });
  };

  calendarOnSelectSlot = ({ start, end }) => {
    const { currentTodo, schedule } = this.state;
    if (currentTodo) return;
    const title = window.prompt("What's your todo item?"); // TODO: Use Modal
    if (!title) return;
    schedule.push(new TodoModel({
      start,
      estimate: moment.duration(moment(end).diff(moment(start))).asMinutes(),
      title,
    }));
    this.setState({ schedule: schedule.update() });
  };

  calendarOnSelectEvent = (event) => {
    this.setState({ currentTodo: event });
  }

  todoOnRequestClose() {
    // todo: Save currentTodo changes
    this.setState({ currentTodo: null });
  }

  render() {
    const { currentTodo } = this.state;
    const { schedule, increment } = this.props;
    return (
      <div>
        <Modal
          isOpen={!!currentTodo}
          onRequestClose={this.todoOnRequestClose}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <Todo todo={currentTodo} />
          <button type="button" onClick={this.todoOnRequestClose.bind(this)}>Close</button>
        </Modal>
        <Calendar
          defaultDate={new Date()}
          defaultView="day"
          events={schedule}
          onEventDrop={this.calendarOnEventDrop}
          onEventResize={this.calendarOnEventResize}
          onSelectEvent={this.calendarOnSelectEvent}
          onSelectSlot={this.calendarOnSelectSlot}
          localizer={localizer}
          step={increment}
          selectable
          resizable
          style={{ height: '100vh' }}
        />
      </div>);
  }
}

export default Schedule;
