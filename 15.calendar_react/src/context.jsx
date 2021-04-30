import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvent, setEvent] = useState(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onOpenModal = (e) => {
    if (e.target.closest(".event")) {
      setEvent(!isEvent);
      return;
    }
    if (isEvent) {
      return; // setEvent(false);
    }
    // if (!isEvent && e.target.closest(".calendar__time-slot")) {
    //   setEvent(false);
    //   setIsOpen(true);
    //   return;
    // }
    setEvent(false);
    setIsOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        isEvent,
        onCloseModal,
        onOpenModal,
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
