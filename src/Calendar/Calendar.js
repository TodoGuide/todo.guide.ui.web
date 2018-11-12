import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../Data/events'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const Calendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={events}
    />
  </div>
)

export default Calendar;
