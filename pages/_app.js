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
        background-color: ${props => (props.isDarkMode ? themes.dark.primaryBackgroundColor : themes.light.primaryBackgroundColor)};
        transition:background-color 0.5s ease;
    }
`

function MyApp({ Component, pageProps }) {
    const [isDarkMode, setDarkMode] = useState(false);
    const [mobileNavbarIsOpen, setMobileNavbarOpen] = useState(false);

    function toggleTheme(){
        setDarkMode(!isDarkMode);
    }

  return( 
    <ThemeContext.Provider value={isDarkMode ? themes.dark : themes.light}>
        <GlobalStyle isDarkMode={isDarkMode} themes={themes} mobileNavbarIsOpen={mobileNavbarIsOpen}/>
        <PageContainer toggleTheme={toggleTheme} isDarkMode={isDarkMode} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen}>
            <Component {...pageProps} />
        </PageContainer>
    </ThemeContext.Provider>
  )
}

export default MyApp;