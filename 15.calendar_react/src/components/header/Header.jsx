import React, { Component } from "react";
import Modal from '../modal/Modal';
// import moment from 'moment';

import { months } from "../../utils/dateUtils.js";

import "./header.scss";

class Header extends Component{
  // state = {
  //   isOpen: false,
  // }

  // handleOpenModal = () => {
  //   this.setState({
  //     isOpen: !this.props.handleOpen(this.state.isOpen)
  //   })
  // }

  render(){
    const { weekDates, handleTodayBtn, handleArrowBtn, handleOpen, isOpen } = this.props;
    // const prevMonth = moment(props.weekDates[0]).format('MMM');
    // const nextMonth = moment(props.weekDates[6]).format('MMM');
    
    // const { isOpen } = this.state;
    const monthAtWeekStart = months[new Date(weekDates[0]).getMonth()];
    const monthAtWeekEnd = months[new Date(weekDates[6]).getMonth()];
    // console.log(this.state);
    return (
      <header className="header">
        <button
          className="button create-event-btn"
          onClick={handleOpen}
          // onClick={this.handleOpenModal}
        >
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={handleTodayBtn}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={() => handleArrowBtn(-7)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={() => handleArrowBtn(7)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">
            {`${monthAtWeekStart === monthAtWeekEnd
              ? monthAtWeekStart
              : monthAtWeekStart + ' - ' + monthAtWeekEnd}`}
          </span>
        </div>
        {isOpen &&
        <Modal
          isOpen={isOpen}
          // handleClose={this.handleOpenModal}
          handleClose={handleOpen}
        />
        }
      </header>
    );
  }
};

export default Header;
