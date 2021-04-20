import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: new Date(),
    isCurrentDate: true, 
  };

  componentDidMount() {
    this.handleCurrentDate();
  }

  handleTodayBtnClick = () => {
    this.setState({
      weekStartDate: new Date(),
      isCurrentDate: true,
    })
  }

  handleArrowBtnClick = diff => {
    const date = this.state.weekStartDate;
    const currentDate = new Date(getWeekStartDate(new Date())).getTime();
    const stateDate = new Date(getWeekStartDate(this.state.weekStartDate)).getTime();
     
    currentDate === stateDate
       ? this.setState({
          weekStartDate: new Date(date.setDate(date.getDate() + diff)),
          isCurrentDate: true,
       })
       : this.setState({
          weekStartDate: new Date(date.setDate(date.getDate() + diff)),
          isCurrentDate: false
       })
  }

  handleCurrentDate = () => {
    const currentDate = new Date(getWeekStartDate(new Date())).getTime();
    const stateDate = new Date(getWeekStartDate(this.state.weekStartDate)).getTime();
    console.log(stateDate);
    console.log(currentDate);
    console.log(currentDate === stateDate);
    return (currentDate === stateDate
      ? this.setState({isCurrentDate: true})
      : this.setState({ isCurrentDate: false })
    )
  }

  render() {
    const { weekStartDate, isCurrentDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekDates={weekDates}
          handleTodayBtn={this.handleTodayBtnClick}
          handleArrowBtn={this.handleArrowBtnClick}
        />
        <Calendar
          weekDates={weekDates}
          isNow={isCurrentDate}
        />
      </>
    );
  }
}

export default App;
