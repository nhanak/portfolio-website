//import '../styles/globals.css';
import React, {useState} from "react";
import { ThemeContext, themes} from "../components/Theme/Theme";
import { createGlobalStyle } from 'styled-components';

import PageContainer from "../components/PageContainer/PageContainer";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    html{
        font-size:62.5%;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
    body {
        background-color: ${props => (props.theme === "dark" ? themes.dark.primaryBackgroundColor : themes.light.primaryBackgroundColor)};
        transition:background-color 0.5s ease;
    }
`
/*
        height: ${props=>props.mobileNavbarIsOpen? "100vh;" :"auto;"}
        overflow-y: ${props=>props.mobileNavbarIsOpen? "hidden;" :"auto;"}

*/

function MyApp({ Component, pageProps }) {

    const [theme, setTheme] = useState("light");
    const [isDarkMode, setDarkMode] = useState(false);
    const [mobileNavbarIsOpen, setMobileNavbarOpen] = useState(false);

    function toggleTheme(){
        if (theme === "dark"){
            setTheme("light")
            setDarkMode(false);
        }
        else{
            setTheme("dark");
            setDarkMode(true);
        }
    }


  return( 
    <ThemeContext.Provider value={theme === "dark" ? themes.dark : themes.light}>
        <GlobalStyle theme={theme} themes={themes} mobileNavbarIsOpen={mobileNavbarIsOpen}/>
        <PageContainer toggleTheme={toggleTheme} isDarkMode={isDarkMode} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen}>
            <Component currentTheme={theme} isDarkMode={isDarkMode} toggleTheme={toggleTheme} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen} {...pageProps} />
        </PageContainer>
    </ThemeContext.Provider>
  )
}

export default MyApp;