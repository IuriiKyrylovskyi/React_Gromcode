import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvent, setEvent] = useState(false);
  // const [hourProps, setHourProps] = useState({
  //   dataDay,
  //   dataHour,
  //   hourEvents,
  // });

  const onCloseModal = () => {
    setIsOpen(false);
  };
  
  const onEventClick = e => {
    if (e.target.className === 'event') {
      console.log("onEventClick");
      setEvent(true);
    }
  }

  const onOpenModal = () => {
    // onEventClick();

    if (isEvent) {
      console.log(isEvent);
      return;
    }
    setIsOpen(true);
  };

  // const handleHourProps = dataFromHour => {
  //   return dataFromHour;
  // }



  return (
    <AppContext.Provider
      value={{
        isOpen,
        onCloseModal,
        onOpenModal,
        // handleHourProps,
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
