import React, { Component } from 'react';
import './timeline.scss';

class TimeLine extends Component {
  state = {
    date: this.props.weekStartDate,
    isUpdate: true,
  }

  componentDidMount() {
    if (this.isCurrentDate()) {

      const timeSecDiff = 60 * 1000 - new Date().getMilliseconds();

      setTimeout(() => this.interval, timeSecDiff);

      this.interval = setInterval(() => {
        this.setState({
          date: new Date(),
          isUpdate: true,
        })
      }, 1000)
    }
  }

  componentWillUnmount() {
    this.setState({
      ...this.state,
      isUpdate: false
    })
    clearInterval(this.interval)
  }

  isCurrentDate = () => {
    const weekEndDate = this.state.date.getTime() + 7 * 24 * 60 * 1000;
    const nowTime = (new Date()).getTime();
 
    return (nowTime < weekEndDate && nowTime > this.state.date.getTime());
  } 

  render() {
    if (!this.state.isUpdate) {
      return null;
    }
    
    const { weekStartDate } = this.props;
    const mins = this.state.date.getMinutes();
 
    return (this.state.isUpdate &&
      weekStartDate.getFullYear() === new Date().getFullYear() &&
      weekStartDate.getMonth() === new Date().getMonth() &&
      <div
        className="time-line"
        style={{top: mins}}
      ></div>)
        
      
  }
}

export default TimeLine;