import React, { Component } from "react";
import { useGlobalContext } from "../../context";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { fetchEventsList, createEvent, deleteEvent } from "../../gateway/gateway.js";
// import events from "../../gateway/events";

import "./calendar.scss";

class Calendar extends Component {
  state = {
    events: [],
    title: "",
    dateFrom: "",
    dateTo: "",
    description: "",
  };

  componentDidMount() {
    this.fetchEvents();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.isOpen === nextProps.isOpen;
  // }

  componentDidUpdate() {
        // this.fetchEvents();

    // this.handleEventCreate();
    // this.handleEventDelete();
  }

  fetchEvents = () => {
    fetchEventsList().then((eventsList) => {
      console.log(eventsList);
      this.setState({
        ...this.state,
        events: eventsList,
      });
    });
  };

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

  handleEventDelete = (id) => {
    deleteEvent(id).then(() => this.fetchEvents());
  };

  render() {
    const { weekStartDate, weekDates } = this.props;
    console.log(weekDates);
    console.log(this.state.events);
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={this.state.events} weekStartDate={weekStartDate} />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
