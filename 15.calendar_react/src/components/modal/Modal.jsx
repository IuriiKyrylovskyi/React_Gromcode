import React, { Component } from "react";
import { createPortal } from "react-dom";
import moment from 'moment';
import "./modal.scss";

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  state = {
    title: "",
    date: new Date(),
    description: "",
  };
    
  element = document.createElement('div');
  
  componentDidMount(){
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
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
    const dayMonthYear = moment(date).format('YYYY-MM-DD');
    const timeStart = moment(date).format('hh:mm');
    const timeEnd = moment(date).format('hh:mm');
    
    console.log(timeStart);
    console.log(timeEnd);

    if (!isOpen) {
      return null;
    }

    return createPortal(
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
                  value={timeStart}
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={timeEnd}
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
      </div>,
      this.element
    );
  }
}

export default Modal;
