import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from "./events"

const localizer = momentLocalizer(moment);

moment.locale('en-GB');


const Agenda = () => {
   return (
        
        <div style={{ height: '500pt'}}>
          <Calendar
            events={events}
            className="calendar-hover overflows"
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
        
   )
};

// render(<App />, document.getElementById('root'));
export default Agenda
