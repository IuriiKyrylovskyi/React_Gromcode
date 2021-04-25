import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
// import { useGlobalContext } from "../../context";
import { createEvent } from "../../gateway/gateway";
import moment from "moment";
import "./modal.scss";

const modalRoot = document.querySelector("#modal");

const Modal = (props) => {
  const [event, setEvent] = useState({
    title: "",
    date: moment().format("MM-DD-YYYY"),
    startTime: moment().format("HH:mm"),
    endTime: moment().format("HH:mm"),
    description: "",
  });

  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);
    return modalRoot.removeChild(element);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      [name]: value,
    });
  };

  const handleEventCreate = () => {
    const { title, date, startTime, endTime, description } = event;

    const newEvent = {
      title: title,
      date: date,
      dateFrom: startTime,
      dateTo: endTime,
      description: description,
    };

    // console.log(newEvent);
    createEvent(newEvent);
    // .then(() => this.fetchEvents())
  };
  
  // const { isOpen, handleClose } = useGlobalContext();
  const { isOpen, handleClose } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event);
    handleEventCreate();
    handleClose();
  };

  const { title, date, startTime, endTime, description } = event;
  // const dayMonthYear = moment().format("YYYY-MM-DD");
  // const timeStart = moment().format("HH:mm");
  // const timeEnd = moment().format("HH:mm");

  // console.log(timeStart);
  // console.log(timeEnd);
  // console.log(this.state);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal overlay" onClick={handleClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={handleClose}
            //
          >
            +
          </button>
          <form
            className="event-form"
            onSubmit={handleSubmit}
            //
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
              //
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field"
                value={date}
                // value={dayMonthYear}
                onChange={handleChange}
                // onSelect={selected}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
                //
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
                //
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
              //
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              //
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>,
    element
  );
};

export default Modal;
