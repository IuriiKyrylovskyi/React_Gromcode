import React from 'react';
import './timeline.scss';

const TimeLine = () => {
  const mins = new Date().getMinutes();
  
  return (
    <div
      className="time-line"
      style={{top: mins}}
    ></div>
  )
}

export default TimeLine;