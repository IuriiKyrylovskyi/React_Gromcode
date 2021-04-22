import React from "react";
import TimeLine from "../timeLine/TimeLine";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({weekStartDate, dataDay, dataHour, hourEvents }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            id={Math.random()}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
      {
        weekStartDate.getFullYear() === new Date().getFullYear() &&
        weekStartDate.getMonth() === new Date().getMonth() &&
        dataDay === new Date().getDate() &&
        dataHour === new Date().getHours() && 
      <TimeLine 
        weekStartDate={weekStartDate} 
      />
        }
    </div>
  );
};

export default Hour;
