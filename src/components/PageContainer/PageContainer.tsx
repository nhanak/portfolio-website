import { useContext, useRef } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import NavbarMobile from "../navbarMobile/NavbarMobile";
import NavButtonMobile from "../navButtonMobile/NavButtonMobile";
import Footer from "../footer/Footer";
import Head from "next/head";
import { ThemeContext } from "../theme/Theme";

export default function PageContainer(props) {
  const context = useContext(ThemeContext);
  const { mobileNavbarIsOpen, setMobileNavbarOpen } = props;
  const mobileRef = useRef(null);
  return (
    <div>
      <Head>
        <title>Neil Hanak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isDarkMode={props.isDarkMode} toggleTheme={props.toggleTheme} />
      {props.children}
      <NavButtonMobile
        navRef={mobileRef}
        mobileNavbarIsOpen={mobileNavbarIsOpen}
        setMobileNavbarOpen={setMobileNavbarOpen}
      />
      <NavbarMobile
        ref={mobileRef}
        mobileNavbarIsOpen={mobileNavbarIsOpen}
        setMobileNavbarOpen={setMobileNavbarOpen}
      />
      <Footer />
    </div>
  );
}

// const PageContainerStyled = styled.div`
//   position: relative;
//   max-width: 110rem;
//   min-width: 24rem;
//   height: 100vh;
//   margin: auto;
//   font-size: 1.5rem;
// `;
