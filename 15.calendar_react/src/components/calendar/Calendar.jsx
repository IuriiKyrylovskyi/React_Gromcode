import React, { Component } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import events from "../../gateway/events";

import "./calendar.scss";

class Calendar extends Component {
  state = {
    events,
  };

  render() {
    const {weekStartDate, weekDates, handleOpen } = this.props;

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
