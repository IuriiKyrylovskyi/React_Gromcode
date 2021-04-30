import React, { useState, useContext } from "react";
import moment from "moment";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvent, setEvent] = useState(false);

  const [dateInput, setDateInput] = useState("");
  const [startTimeInput, setStartTimeInput] = useState("");
  const [endTimeInput, setEndTimeInput] = useState("");

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onOpenModal = (e) => {
    if (isEvent || e.target.closest(".event")) {
      return; // setEvent(false);
    }
    if (e.target.className === "calendar__time-slot") {
      setDateInput("");
      setStartTimeInput("");
      setEndTimeInput("");

      setEvent(false);
      setIsOpen(true);
      return;
    }
   
    if (!e.target.closest("event")) {
      console.log(e.target.className);
      setDateInput(moment().format("YYYY-MM-DD"));
      setStartTimeInput(moment().format("HH:mm"));
      setEndTimeInput(moment().format("HH:mm"));

      setEvent(false);
      setIsOpen(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        isEvent,
        onCloseModal,
        onOpenModal,

        dateInput,
        startTimeInput,
        endTimeInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
