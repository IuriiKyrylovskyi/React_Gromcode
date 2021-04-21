import React, { Component } from "react";

import "./modal.scss";

class Modal extends Component {
  //  state = {
  //   isOpen: false,
  // };
  
  // handleOpen = () => {
  //   this.setState({
  //     createEvent: !this.state.isOpen,
  //   })
  // }

  render() {
    const { isOpen, handleClose } = this.props;

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
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
              />
              <div className="event-form__time">
                <input type="date" name="date" className="event-form__field" />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
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
