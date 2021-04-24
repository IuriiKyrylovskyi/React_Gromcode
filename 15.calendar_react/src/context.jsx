import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };
  
  const onOpenModal = () => {
    setIsOpen(true);
  };

  return <AppContext.Provider value={{ isOpen, onCloseModal, onOpenModal }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
