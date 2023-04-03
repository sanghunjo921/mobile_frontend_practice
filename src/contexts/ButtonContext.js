import { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  return (
    <ButtonContext.Provider value={[click, setClick]}>
      {children}
    </ButtonContext.Provider>
  );
};
