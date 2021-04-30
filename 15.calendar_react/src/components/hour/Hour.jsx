import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import TimeLine from "../timeLine/TimeLine";
import Event from "../event/Event";
import { deleteEvent } from '../../gateway/gateway';
// import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ weekStartDate, dataDay, dataHour, hourEvents, fetchEvents }) => {
  const currentDate = weekStartDate.getFullYear() === new Date().getFullYear() && weekStartDate.getMonth() === new Date().getMonth() && dataDay === new Date().getDate() && dataHour === new Date().getHours();

  const { onOpenModal, isOpen } = useGlobalContext();

  useEffect(() => {
    return isOpen === true;
  });

  function onDeleteEvent(e) {
    if (isOpen) {
      return;
    }
    if (e.target.className === "event") {
      deleteEvent();
      // fetchEvents();
      return;
    }
  }

  return (
    <div
      className="calendar__time-slot"
      data-time={dataHour + 1}
      onClick={onOpenModal}
      //
    >
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, date, startTime, endTime, title }) => {
        const dateFrom = new Date(date + " " + startTime);
        const dateTo = new Date(date + " " + endTime);
        // console.log((dateTo - dateFrom) / 1000 / 60 / 60);
        // const eventDuration = (dateTo - dateFrom) / 1000 / 60 / 60;

        return (
          //eventDuration <= 6 &&
          <Event
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${startTime} - ${endTime}`}
            title={title}
            // handleDelete={onDeleteEvent}
          />
        );
      })}
      {currentDate && <TimeLine weekStartDate={weekStartDate} />}
    </div>
  );
};

export default Hour;
