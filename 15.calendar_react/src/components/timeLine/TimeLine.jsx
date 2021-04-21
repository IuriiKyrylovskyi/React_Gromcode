import React, { Component } from 'react';
import './timeline.scss';

class TimeLine extends Component {
  state = {
    date: this.props.weekStartDate,
    isUpdate: true,
  }

  // componentDidMount() {
  //   if (this.isCurrentDate()) {

  //     const timeSecDiff = 60 * 1000 - new Date().getMilliseconds();

  //     setTimeout(() => this.interval, timeSecDiff);

  //     this.interval = setInterval(() => {
  //       this.setState({isUpdate: true})
  //     }, 1000)
  //   }
  // }

  // componentWillUnmount() {
  //   this.setState({isUpdate: false})
  //   clearInterval(this.interval)
  // }

  isCurrentDate = () => {
    const weekEndDate = this.state.date.getTime() + 7 * 24 * 60 * 1000;
    const nowTime = (new Date()).getTime();
 
    return (nowTime < weekEndDate && nowTime > this.state.date.getTime());
  } 

  render() {
    if (!this.state.isUpdate) {
      return;
    }
    
    const { dataDay, dataHour } = this.props;

    // if (this.state.isUpdate &&
    //   dataDay === new Date().getDate() &&
    //   dataHour === new Date().getHours()) {
        const mins = new Date().getMinutes();
        
        return (
          <div
            className="time-line"
            style={{top: mins}}
          ></div>
        )
      // }
  }
}

export default TimeLine;