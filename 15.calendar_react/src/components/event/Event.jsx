import React, {useState, useEffect} from "react";
import { useGlobalContext } from "../../context";
import "./event.scss";

const Event = ({ id, height, marginTop, title, time, handleDelete }) => {
  const { isEvent, onEventClick } = useGlobalContext();

  const [isClicked, setIsClicked] = useState(isEvent);

  const onOpenDelete = e => {
    setIsClicked(!isEvent);
  }

  //  const onCloseDelete = (e) => {
  //    setIsClicked(isEvent);
  //  };

  const eventStyle = {
    height,
    marginTop,
  };
  // console.log(eventStyle);


  return (
    <>
      <div style={eventStyle} className="event" onClick={onOpenDelete}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {isClicked && (
          <span
            className="delete-event-btn"
            style={{ top: height - 10 }}
            onClick={onOpenDelete}
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
