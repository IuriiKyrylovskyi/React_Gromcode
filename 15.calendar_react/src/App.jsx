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
    if (this.state.isCurrentDate) {

      const timeSecDiff = 60 * 1000 - new Date().getUTCMilliseconds();

      setTimeout(() => this.interval, timeSecDiff);

      this.interval = setInterval(() => {
        this.setState({ isCurrentDate: this.state.isCurrentDate })
      }, 1000)
      console.log(this.state.isCurrentDate);
    }
  }
  
  componentWillUnmount() {
    if (!this.state.isCurrentDate) {
      clearInterval(this.interval)
    }
  }

  handleTodayBtnClick = () => {
    this.setState({
      weekStartDate: new Date(),
      isCurrentDate: true,
    })
  }

  handleArrowBtnClick = diff => {
    const date = this.state.weekStartDate;

    const currentDate = new Date(getWeekStartDate(new Date()));
    const stateDate = new Date(getWeekStartDate(this.state.weekStartDate));
    console.log(stateDate);
    console.log(currentDate);
    console.log(currentDate === stateDate);
    if (currentDate === stateDate) {
      return this.setState({
          isCurrentDate: true,
          weekStartDate: new Date(date.setDate(date.getDate() + diff)),
         }) 
    } 
    return this.setState({
          isCurrentDate: false,
          weekStartDate: new Date(date.setDate(date.getDate() + diff)),
         })
  }

  // handleCurrentDate = () => {
  //   const currentDate = new Date(getWeekStartDate(new Date())).getTime();
  //   const stateDate = new Date(getWeekStartDate(this.state.weekStartDate)).getTime();
  //   console.log(stateDate);
  //   console.log(currentDate);
  //   console.log(currentDate === stateDate);
  //   return (currentDate === stateDate
  //     ? this.setState({
  //       ...this.state,
  //       isCurrentDate: true
  //     })
  //     : this.setState({
  //       ...this.state,
  //       isCurrentDate: false
  //     })
  //   )
  // }

  render() {
    const { weekStartDate, isCurrentDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));


    //   const currentDate = new Date(getWeekStartDate(new Date())).getTime();
    // const stateDate = new Date(getWeekStartDate(this.state.weekStartDate)).getTime();
    // console.log(stateDate);
    // console.log(currentDate);
    // console.log(currentDate === stateDate);
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
