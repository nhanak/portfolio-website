import React, {useContext} from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";
import { ThemeContext } from "../Theme/Theme";

export default function PageContainer(props){
    const context = useContext(ThemeContext);
    return (
        <PageContainerStyled theme={context}>
            <Head>
                <title>Neil Hanak</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar isDarkMode={props.isDarkMode} toggleTheme={props.toggleTheme}/>
            {props.children}
            <Footer/>
        </PageContainerStyled>
    )
}

const PageContainerStyled = styled.div`
    max-width:110rem;
    min-width:42rem;
    height:100vh;
    margin:auto;
`