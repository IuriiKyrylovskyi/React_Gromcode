import React from "react";

import "./event.scss";

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  console.log(eventStyle);
  return (
    <div
      style={eventStyle}
      className="event"
      // onClick={handleDelete}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
