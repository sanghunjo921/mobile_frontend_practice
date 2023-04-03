import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [visible, setButtonVisibile] = useState(false);
  const [isInit, setInit] = useState(true);

  useEffect(() => {
    setMobile(window.innerWidth <= 500);
  }, [setMobile])

  
  return (
    <MenuContext.Provider value={{isOpen, setOpen, isMobile, setMobile, visible, setButtonVisibile, isInit, setInit}}>
      {children}
    </MenuContext.Provider>
  );
};
