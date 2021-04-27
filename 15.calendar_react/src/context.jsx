import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvent, setEvent] = useState(false);
  const [isRender, setIsRender] = useState(false);
  // const [hourProps, setHourProps] = useState({
  //   dataDay,
  //   dataHour,
  //   hourEvents,
  // });
  // const onRerender = () => {
  //   setIsRender(isRender);
  // };
  const onCloseModal = () => {
    setIsOpen(false);
    setIsRender(isRender);
  };

  const onOpenModal = (e) => {
    if (e.target.closest(".event")) {
      console.log("onEventClick");
      setEvent(true);
      return;
    }
    if (isEvent) {
      return; // setEvent(false);
    }
    setEvent(false);
    setIsOpen(true);
  };

  // const handleHourProps = dataFromHour => {
  //   return dataFromHour;
  // }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        isEvent,
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
