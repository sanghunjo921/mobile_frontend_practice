import React, { useContext, useEffect } from "react";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { OverlayBox } from "./components/OverlayBox";
import { MenuContext, MenuProvider } from "./contexts/MenuContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import style from "./App.module.css"
import {  ButtonProvider } from "./contexts/ButtonContext";
import { Button } from "./components/Button/buttons";
import {debounce} from "lodash";

function App() {
  const {setMobile} = useContext(MenuContext);

  useEffect(() => {
    const scrollHandler = () => {
      setMobile(window.innerWidth <= 500);
    }
    window.addEventListener('resize', debounce(scrollHandler, 300))
    return window.removeEventListener('resize', scrollHandler)
  }, [setMobile])
  return (
    <div className={style.container}>

        <ButtonProvider>
        <HamburgerMenu />
        <Button position="fixed">Back to Top</Button>
        <OverlayBox />
        <Home id="home"/>
        <About id="about"/>
        <Contact id="contact"/>
        </ButtonProvider>
      
    </div>
  );
}

export default App;
