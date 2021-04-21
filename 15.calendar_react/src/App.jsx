import React, { Component } from "react";
import moment from 'moment';
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: new Date(),
    isCurrentDate: true, 
  };

  componentDidMount() {
    if (this.state.isCurrentDate) {

      const timeSecDiff = 60 * 1000 - new Date().getMilliseconds();

      setTimeout(() => this.interval, timeSecDiff);

      this.interval = setInterval(() => {
        this.setState({ isCurrentDate: true })
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleTodayBtnClick = () => {
    if (this.state.isCurrentDate) {
      return;
    }
    this.setState({
      weekStartDate: new Date(),
      isCurrentDate: true,
    })
  }

  handleArrowBtnClick = diff => {
    const date = this.state.weekStartDate;

    const weekDates = generateWeekRange(getWeekStartDate(this.state.weekStartDate));
const arr = weekDates.filter(day => moment(day).format('YYYY DD MMM') === moment(new Date()).format('YYYY DD MMM'));

    // const currentDate = new Date(getWeekStartDate(new Date()));
    // const stateDate = new Date(getWeekStartDate(this.state.weekStartDate));
    // console.log(stateDate);
    // console.log(currentDate);
    // console.log(currentDate === stateDate);

    if (arr.length) {
      return this.setState({
        isCurrentDate: true,
        weekStartDate: new Date(date.setDate(date.getDate() + diff)),
      }) 
    }
    
    clearInterval(this.interval)

    return this.setState({
          isCurrentDate: false,
          weekStartDate: new Date(date.setDate(date.getDate() + diff)),
         })
  }

  // handleCurrentDate = () => {
  //   const currentDate = new Date(getWeekStartDate(new Date())).getTime();
  //   const stateDate = new Date(getWeekStartDate(this.state.weekStartDate)).getTime();
  //   // console.log(stateDate);
  //   // console.log(currentDate);
  //   // console.log(currentDate === stateDate);
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
console.log(isCurrentDate);
const arr = weekDates.filter(day => moment(day).format('YYYY DD MMM') === moment(new Date()).format('YYYY DD MMM'));
console.log(arr.length);
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
