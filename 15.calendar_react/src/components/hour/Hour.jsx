import React from "react";
import TimeLine from "../timeLine/TimeLine";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ weekStartDate, dataDay, dataHour, hourEvents, handleOpen }) => {
  
  
  // const handleOpenModal = () => {
  //   this.setState({
  //     isOpen: !this.props.handleOpen(this.state.isOpen)
  //   })
  // }
  let isModalOpen = false;

  const handleClick = () => { 
    handleOpen(isModalOpen);
    console.log({ weekStartDate, dataDay, dataHour, hourEvents });
  }

  const currentDate = weekStartDate.getFullYear() === new Date().getFullYear() &&
    weekStartDate.getMonth() === new Date().getMonth() &&
    dataDay === new Date().getDate() &&
    dataHour === new Date().getHours();

  return (
    <div
      className="calendar__time-slot"
      data-time={dataHour + 1}
      onClick={handleClick}
    >
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
        // weekStartDate.getFullYear() === new Date().getFullYear() &&
        // weekStartDate.getMonth() === new Date().getMonth() &&
        // dataDay === new Date().getDate() &&
        // dataHour === new Date().getHours()
        currentDate &&
        <TimeLine 
          weekStartDate={weekStartDate} 
        />
      }
    </div>
  );
};

export default Hour;
