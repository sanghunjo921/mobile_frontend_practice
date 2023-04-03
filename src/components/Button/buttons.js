import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import styles from "./Button.module.css"


export const Button = ({children, position = "static", onClick}) => {
    const {visible} = useContext(MenuContext);

    const overrideCSS = position === "fixed" ? {
        bottom: "2rem",
        left: "50%"
    } : {};

    return visible ? (
        <div className={styles.container} style={{position, ...overrideCSS}}>
            <button className={styles.button} onClick={onClick}>{children}</button>
        </div>
    ) : (
        <></>
    )
}