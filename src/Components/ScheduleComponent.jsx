import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import TodoComponent from './TodoComponent';
import Todo from '../Models/Todo';
import ScheduleModel from '../Models/Schedule';
import TodoScheduleItemComponent from './TodoScheduleItemComponent';

// Setup
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const Calendar = withDragAndDrop(BigCalendar);

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
class ScheduleComponent extends Component {
  static propTypes = {
    increment: PropTypes.number,
    schedule: PropTypes.instanceOf(ScheduleModel).isRequired,
    onScheduleChanged: PropTypes.func,
  }

  static defaultProps = {
    increment: 15,
    onScheduleChanged: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { currentTodo: null, schedule: props.schedule };
  }

  calendarOnEventResize = ({ event, start, end }) => {
    console.log('Calling calendarOnEventResize: ', event, { start, end });
    event.estimate = moment.duration(moment(end).diff(moment(start))).asMinutes();
    event.start = start;
    this.callOnScheduleChanged();
  };

  calendarOnEventDrop = ({ event, start }) => {
    console.log('Calling calendarOnEventDrop: ', event, { start });
    event.start = start;
    console.log('Calling OnScheduleChanged event ', event);
    this.callOnScheduleChanged();
  };

  callOnScheduleChanged = () => {
    console.log('Calling callOnScheduleChanged');
    const { onScheduleChanged } = this.props;
    onScheduleChanged();
  }

  calendarOnSelectSlot = ({ start, end }) => {
    const { currentTodo, schedule } = this.state;
    if (currentTodo) return;
    const todo = new Todo({
      start,
      estimate: moment.duration(moment(end).diff(moment(start))).asMinutes(),
    });
    schedule.push(todo);
    this.setState({ currentTodo: todo, schedule });
  };

  calendarOnSelectEvent = (event) => {
    this.setState({ currentTodo: event });
  }

  todoOnCloseClick = () => {
    const { currentTodo, schedule } = this.state;
    if (!currentTodo.title) {
      schedule.splice(schedule.indexOf(currentTodo), 1);
    }
    this.callOnScheduleChanged();
    this.setState({ currentTodo: null });
  }

  render() {
    const { currentTodo, schedule } = this.state;
    const { increment } = this.props;
    console.log('Schedule.jsx render', schedule);
    // Calendar docs: http://intljusticemission.github.io/react-big-calendar/examples/index.html#api
    return (
      <div>
        <Modal
          isOpen={!!currentTodo}
          contentLabel="Example Modal"
          style={modalStyles}
        >
          <TodoComponent todo={currentTodo} />
          <button type="button" onClick={this.todoOnCloseClick}>Close</button>
        </Modal>
        <Calendar
          defaultDate={new Date()}
          defaultView="day"
          events={schedule.filter(todo => !todo.done)}
          titleAccessor={event => (<TodoScheduleItemComponent todo={event} />)}
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

export default ScheduleComponent;
