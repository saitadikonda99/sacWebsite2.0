import React, { Component } from 'react';
import '../Calendar/Calendar.css'; 

import Fullcalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import timeGridPlugin from '@fullcalendar/timegrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

import Footer from '../../components/Footer/Footer';

class Calendar extends Component {
  state = {
    practiceTimes: [
      {
        title: "Registrations for SI",
        start: "2023-04-14T10:00:00",
        end: "2023-04-10T12:00:00",
        backgroundColor: "coral"
      },
      {
        title: "Y22 Social Internship Orientation",
        start: "2023-04-15",
        end: "2023-04-12T16:00:00"
      },
      {
        title: "Y22 Social Internship (Engineering Departments)",
        start: "2023-05-12",
        end: "2023-05-25",
        backgroundColor: "cornflowerblue"
      },
      {
        title: "Y22 Social Internship (MHS Departments)",
        start: "2023-05-25",
        end: "2023-06-07",
        backgroundColor: "coral"
      },
      {
        title: "The Official Expansion of The School of Coding",
        start: "2023-05-10",
        end: "2023-05-10",
        backgroundColor: "slateblue"
      },
      {
        title: "Recruitments for Coding School",
        start: "2023-05-10",
        end: "2023-05-10",
        backgroundColor: "green"
      }
    ]
  };

  handleAddEvent = () => {
    const newEvent = {
      title: "New Event",
      start: "2023-04-12T10:00:00",
      end: "2023-04-12T12:00:00"
    };

    this.setState({ practiceTimes: [...this.state.practiceTimes, newEvent] });
  };

  render() {
    return (
      <div className='CalendarComponent'>
      <div className="CalendarContainer">
        <div className="Calendar-pre">
          <div className="Calendar-pre-inner">
            <h1>SAC Calendar</h1>
          </div>
        </div>
        <div className="Calendar-one">
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay", 
            }}
            editable={false}
            selectable={true}
            height={"90vh"}
            events={this.state.practiceTimes} 
            themeSystem={null}
            className="mycal"
            eventClick={(info) => {
              info.el.classList.add('clicked-event');
            }}
          />
          {/* <button onClick={this.handleAddEvent}>Add Event</button> */}
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default Calendar;
