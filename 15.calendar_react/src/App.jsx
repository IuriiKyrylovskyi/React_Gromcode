import React, { Component } from "react";
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    // weekStartDate: getWeekStartDate(new Date()),
    weekStartDate: new Date(),
  };

  // componentDidMount() {
  //   if (this.isCurrentDate()) {

  //     const timeSecDiff = 60 * 1000 - new Date().getMilliseconds();

  //     setTimeout(() => this.interval, timeSecDiff);

  //     this.interval = setInterval(() => {
  //       this.setState({isRenderTimeLine: true})
  //     }, 1000)
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  handleTodayBtnClick = () => {
    // if (this.isCurrentDate()) {
    //   return;
    // }
    this.setState({
      weekStartDate: new Date(),
    })
  }

  handleArrowBtnClick = diff => {
    const date = this.state.weekStartDate;
    date.setDate(date.getDate() + diff)

    return this.setState({
      weekStartDate: date,
    }) 
  }
    
  // isCurrentDate = () => {
  //   const weekEndDate = this.state.weekStartDate.getTime() + 7 * 24 * 60 * 1000;
  //   const nowTime = (new Date()).getTime();
 
  //   return (nowTime < weekEndDate && nowTime > this.state.weekStartDate.getTime());
  // } 

  render() {
    // console.log(this.isCurrentDate());
    // if (!this.isCurrentDate()) {
    //   clearInterval(this.interval);
    // }

    const { weekStartDate } = this.state;
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
          // isNow={this.isCurrentDate()}
          weekStartDate={weekStartDate}
        />
      </>
    );
  }
}

export default App;
