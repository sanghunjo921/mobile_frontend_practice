import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  return (
    <MenuContext.Provider value={{isOpen, setOpen, isMobile, setMobile}}>
      {children}
    </MenuContext.Provider>
  );
};
