import React, {useContext, useRef} from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import NavButtonMobile from "../NavButtonMobile/NavButtonMobile";
import Footer from "../Footer/Footer";
import Head from "next/head";
import { ThemeContext } from "../Theme/Theme";


export default function PageContainer(props){
    const context = useContext(ThemeContext);
    const {mobileNavbarIsOpen, setMobileNavbarOpen} = props;
    const mobileRef = useRef(null);
    return (
        <PageContainerStyled theme={context}>
            <Head>
                <title>Neil Hanak</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar isDarkMode={props.isDarkMode} toggleTheme={props.toggleTheme}/>
            {props.children}
            <NavButtonMobile navRef={mobileRef.current} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen}/>
            <NavbarMobile ref={mobileRef} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen}/>
            <Footer/>
        </PageContainerStyled>
    )
}

const PageContainerStyled = styled.div`
    position:relative;
    max-width:110rem;
    min-width:24rem;
    height:100vh;
    margin:auto;
`