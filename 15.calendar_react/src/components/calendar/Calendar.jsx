import React, { Component, useEffect } from "react";
import { useGlobalContext } from "../../context";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { fetchEventsList, createEvent, deleteEvent } from "../../gateway/gateway.js";
// import events from "../../gateway/events";

import "./calendar.scss";

class Calendar extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.fetchEvents();
  }

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.isOpen === false || nextProps.isOpen === true) {
  //     return false;
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isEvent === true) {
      this.fetchEvents();
      console.log('didUpdate event', this.state.events);
    } else if (prevProps.isOpen === true) {
      this.fetchEvents();
      console.log('didUpdate modal', this.state.events);
      //  return this.fetchEvents();

      // console.log(this.state.events);
      // console.log(prevState.events);

      // return fetchEventsList().then((eventsList) => {
      //   console.log(eventsList);
      //   this.setState({
      //     events: eventsList,
      //   });
      // });
    }
    // this.handleEventDelete();
  }

  fetchEvents = () => {
    fetchEventsList().then((eventsList) => {
      console.log(eventsList);
      this.setState({
        events: eventsList,
      });
    });
  };

  // handleEventCreate = () => {
  //   this.fetchEvents();
  // };

  handleEventDelete = (id) => {
    deleteEvent(id).then(() => this.fetchEvents());
  };

  render() {
    const { weekStartDate, weekDates } = this.props;
    // console.log(weekDates);
    console.log(this.state.events);
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={this.state.events}
              weekStartDate={weekStartDate}
              //
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;

// //
// //
// //
// const Calendar = (props) => {
//   const [events, setEvents] = useState([]);
//   const [ev, setEv] = useState({
//     title: "",
//     date: "",
//     dateFrom: "",
//     dateTo: "",
//     description: "",
//   });

//   useEffect(() => {
//     fetchEvents();
//   });

//   // componentDidUpdate() {
//   //       // this.fetchEvents();

//   //   // this.handleEventCreate();
//   //   // this.handleEventDelete();
//   // }

//   function fetchEvents() {
//     fetchEventsList().then((eventsList) => {
//       console.log(eventsList);
//       setEvents({
//         events: eventsList,
//       });
//     });
//   }

//   // handleEventCreate = () => {
//   //   const { title, dateFrom, dateTo, description } = this.state;

//   //   const newEvent = {
//   //     title: title,
//   //     dateFrom: dateFrom,
//   //     dateTo: dateTo,
//   //     description: description,
//   //   }

//   //   createEvent(newEvent)
//   //     .then(() => this.fetchEvents())
//   // }

//   function handleEventDelete(id) {
//     deleteEvent(id).then(() => fetchEvents());
//   }

//   const { weekStartDate, weekDates } = props;
//   console.log(weekDates);
//   console.log(events);
//   return (
//     <section className="calendar">
//       <Navigation weekDates={weekDates} />
//       <div className="calendar__body">
//         <div className="calendar__week-container">
//           <Sidebar />
//           <Week weekDates={weekDates} events={events} weekStartDate={weekStartDate} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Calendar;
