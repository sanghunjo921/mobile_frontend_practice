import { useContext } from "react";
import { ButtonContext } from "../contexts/ButtonContext";


export const About = ({id}) => {
  const [click, isClick] = useContext(ButtonContext)

  return (
    
  <div
    style={{
      backgroundColor: "#236267",
      width: "100vw",
      height: "100vh",
    }}
    id = {id}
  >
    About
    {click && <button>button</button> }
  </div>
  
  );
};
