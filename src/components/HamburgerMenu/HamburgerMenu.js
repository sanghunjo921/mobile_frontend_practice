import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import style from "./HamburgerMenu.module.css";

export const HamburgerMenu = () => {
  const {isOpen, setOpen, isMobile, isInit, setInit} = useContext(MenuContext);


  const menuHanlder = () => {
    setOpen(!isOpen);
    setInit(!isInit);
  };
  return (
    <div className={style.container} style={{display: isMobile? "block": "none",}}onClick={menuHanlder}>
      <div className={style.bar1}></div>
      <div className={style.bar2}></div>
      <div className={style.bar3}></div>
    </div>
  );
};
