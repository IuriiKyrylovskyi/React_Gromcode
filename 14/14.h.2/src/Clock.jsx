import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(new Date());
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [time]);
 
  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {moment(getTimeWithOffset(offset)).format('h:mm:ss A')}
      </div>
    </div>
  )
}

export default Clock;

function getTimeWithOffset(offset) {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

