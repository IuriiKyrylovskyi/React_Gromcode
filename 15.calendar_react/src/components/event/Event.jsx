import React from "react";
import { useGlobalContext } from '../../context';
import "./event.scss";

const Event = ({ id, height, marginTop, title, time, handleDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  // console.log(eventStyle);

  const { onEventClick } = useGlobalContext();

  return (
    <div
      style={eventStyle}
      className="event"
      // onClick={() => handleDelete(id)}
      onClick={() => console.log('event')}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
