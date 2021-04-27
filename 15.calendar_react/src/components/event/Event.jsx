import React from "react";
import { useGlobalContext } from "../../context";
import "./event.scss";

const Event = ({ id, height, marginTop, title, time, handleDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  // console.log(eventStyle);

  const { isEvent, onEventClick } = useGlobalContext();

  return (
    <>
      <div
        style={eventStyle}
        className="event"
        onClick={() => console.log('event')}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {isEvent && (
          <span
            className="delete-event-btn"
            style={{ top: height - 10 }}
            onClick={() => console.log("delete")}
            //
          >
            Delete
          </span>
        )}
      </div>
    </>
  );
};

export default Event;
