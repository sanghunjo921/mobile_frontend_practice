import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import styles from "./Button.module.css"


export const Button = ({children, position = "static"}) => {
    const [click, setClick] = useContext(ButtonContext);
    const overrideCSS = position === "fixed" ? {
        bottom: "2rem",
        left: "50%"
    } : {};

    const clickHandler = () => {
        setClick(!click);
    }


    return (
        <div className={styles.container} style={{position, ...overrideCSS}}>
            <button className={styles.button} click = {clickHandler}>{children}</button>
        </div>
    )
}