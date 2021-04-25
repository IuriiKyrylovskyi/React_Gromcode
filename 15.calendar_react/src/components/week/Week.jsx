import React from "react";
import Day from "../day/Day";

import "./week.scss";

const Week = ({ weekStartDate, weekDates, events }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        //getting all events from the day we will render
        const dayEvents = events.filter(
          // (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
          (event) => {
            const dateFrom = new Date(event.date + "-" + event.startTime);
            const dateTo = new Date(event.date + "-" + event.endTime);
            return dateFrom > dayStart && dateTo < dayEnd;
          }
        );

        return <Day key={dayStart.getDate()} dataDay={dayStart.getDate()} dayEvents={dayEvents} weekDates={weekDates} weekStartDate={weekStartDate} />;
      })}
    </div>
  );
};

export default Week;
