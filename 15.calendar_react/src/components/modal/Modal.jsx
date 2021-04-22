import React, { Component } from "react";
import moment from 'moment';
import "./modal.scss";

class Modal extends Component {
  state = {
    title: "",
    date: moment(new Date()),
    description: "",
    dayMonthYear: moment().format('YYYY-MM-DD'),
  };
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }
  // handleOpen = () => {
  //   this.setState({
  //     createEvent: !this.state.isOpen,
  //   })
  // }

  render() {
    const { isOpen, handleClose } = this.props;
    const { title, date, description } = this.state;
    const dayMonthYear = date.format('YYYY-MM-DD');
    const time = date.format('hh:mm');
    
    console.log(typeof dayMonthYear);

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal overlay" onClick={handleClose}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={handleClose}
            >+</button>
            <form
              className="event-form"
              onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={title}
                onChange={this.handleChange}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={dayMonthYear}
                  onChange={this.handleChange}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={time}
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={time}
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={description}
                onChange={this.handleChange}
              ></textarea>
              <button
                type="submit"
                className="event-form__submit-btn"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
