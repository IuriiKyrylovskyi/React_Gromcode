import React, { Component } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { fetchEventsList, createEvent, deleteEvent } from '../../gateway/gateway.js'
// import events from "../../gateway/events";

import "./calendar.scss";

class Calendar extends Component {
  state = {
    events: [],
    title: '',
    dateFrom: '', 
    dateTo: '', 
    description: '',
  };

  // componentDidMount() {
  //   this.fetchEvents();
  // }

  // componentDidUpdate() {
  //   this.handleEventCreate();
  //   this.handleEventDelete();
  // }

  // fetchEvents = () => {
  //   fetchEventsList()
  //     .then(eventsList => {
  //       console.log(eventsList);
  //       this.setState({
  //         events: eventsList,
  //       })
  //     })
  // }

  // handleEventCreate = () => {
  //   const { title, dateFrom, dateTo, description } = this.state;

  //   const newEvent = {
  //     title: title,
  //     dateFrom: dateFrom,
  //     dateTo: dateTo,
  //     description: description,
  //   }

  //   createEvent(newEvent)
  //     .then(() => this.fetchEvents())
  // }

  // handleEventDelete = id => {
  //   deleteEvent(id)
  //     .then(() => this.fetchEvents())
  // }

  render() {
    const { weekStartDate, weekDates, handleOpen } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={this.state.events}
              weekStartDate={weekStartDate}
              handleOpen={handleOpen}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
