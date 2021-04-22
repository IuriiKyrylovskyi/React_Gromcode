import React, { Component } from "react";
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: getWeekStartDate(new Date()),
  };

  handleTodayBtnClick = () => {
    const { weekStartDate } = this.state;
    const weekStartTime = generateWeekRange(getWeekStartDate(weekStartDate))[0].getTime();
    const weekEndTime = weekStartTime + 7 * 24 * 60 * 60 * 1000;
    const nowTime = new Date().getTime();

    if (nowTime > weekStartTime && nowTime < weekEndTime) {
      return;
    }
    this.setState({
      weekStartDate: getWeekStartDate(new Date()),
    })
  }

  handleArrowBtnClick = diff => {
    const date = this.state.weekStartDate;
    date.setDate(date.getDate() + diff)

    return this.setState({
      weekStartDate: date,
    }) 
  }

  handleOpenModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    // console.log(weekStartDate);
    // console.log(this.state);

    return (
      <>
        <Header
          weekDates={weekDates}
          handleTodayBtn={this.handleTodayBtnClick}
          handleArrowBtn={this.handleArrowBtnClick}
          handleOpen={this.handleOpenModal}
        />
        <Calendar
          weekDates={weekDates}
          weekStartDate={weekStartDate}
          handleOpen={this.handleOpenModal}
        />
      </>
    );
  }
}

export default App;
