import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { NavItem } from "../NavItem";
import style from "./Navigation.module.css";

const NavItems = [
  {
    name: "Home",
    color: "#21292c",
  },
  {
    name: "About",
    color: "#236267",
  },
  {
    name: "Contact",
    color: "#aa3e39",
  },
];

export const Navigation = () => {
  const {isOpen, isMobile} = useContext(MenuContext);
  return isMobile ? (
    <nav
      className={`${style.container} ${
        isOpen ? style.containerSlideIn : style.containerSlideOut
      }`}
    >
      <ul >
        {NavItems.map((e) => (
          <NavItem key={e.name} {...e} />
        ))}
      </ul>
    </nav>
  ) : (
    <ul className={style.desktop}>
    {NavItems.map((e) => (
      <NavItem key={e.name} {...e} />
    ))}
  </ul>
  );
};
