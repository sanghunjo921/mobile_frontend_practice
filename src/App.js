import React, { useContext, useEffect } from "react";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { OverlayBox } from "./components/OverlayBox";
import { MenuContext } from "./contexts/MenuContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import style from "./App.module.css"
import {  ButtonProvider } from "./contexts/ButtonContext";
import { Button } from "./components/Button/buttons";
import {debounce} from "lodash";

function App() {
  const {setOpen, isMobile, setMobile, setButtonVisibile} = useContext(MenuContext);
  
  const buttonHandler = () => {
    window.scrollTo(0,0);
    console.log("click")
  }

  useEffect(() => {
    const scrollHandler = () => {
      const mobileSize = window.innerWidth <= 500
      setMobile(mobileSize);
      if (mobileSize !== isMobile) {
        setOpen(false);
      }
    }
    window.addEventListener('resize', debounce(scrollHandler, 300))
    return window.removeEventListener('resize', scrollHandler)
  }, [setMobile, isMobile, setOpen])

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setButtonVisibile(window.scrollY !== 0);
    })
  }, [setButtonVisibile])
  return (
    <div className={style.container}>

        <ButtonProvider>
        <HamburgerMenu />
        <Button position="fixed" onClick={buttonHandler}>Back to Top</Button>
        <OverlayBox />
        <Home id="home"/>
        <About id="about"/>
        <Contact id="contact"/>
        </ButtonProvider>
      
    </div>
  );
}

export default App;
