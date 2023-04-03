import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import { MenuContext } from "../../contexts/MenuContext";
import style from "./NavItem.module.css";

export const NavItem = ({ color, name }) => {
  const [click, setClick] = useContext(ButtonContext);
  const {isMobile} = useContext(MenuContext);

  const buttonHandler = () => {
    setClick(!click);
  };
  return (
    <li
      className={style.container}
      style={{
        backgroundColor: isMobile ? color: "transparent",
      }}
    >
      {isMobile ?  <span onClick={buttonHandler}><a href={`#${name.toLowerCase()}`}>{name}</a></span> :  <div onClick={buttonHandler}><a href={`#${name.toLowerCase()}`}>{name}</a></div>}
    </li>
  );
};
