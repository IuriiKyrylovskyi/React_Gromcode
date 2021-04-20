import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: new Date(),
  };

  handleTodayBtnClick = () => {
    this.setState({ weekStartDate: new Date()})
  }

  handleArrowBtnClick = diff => {
    console.log(this.state.weekStartDate);
    const newDate = this.state.weekStartDate;
    this.setState({ weekStartDate: newDate.setDate(newDate.getDate() + diff) })
    console.log(this.state.weekStartDate);
  }

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekDates={weekDates}
          handleTodayBtn={this.handleTodayBtnClick}
          handleArrowBtn={this.handleArrowBtnClick}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
