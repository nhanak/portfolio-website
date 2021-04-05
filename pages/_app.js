//import '../styles/globals.css';
import React, {useState} from "react";
import { ThemeContext, themes} from "../components/Theme/Theme";
import { createGlobalStyle } from 'styled-components';

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
        height: ${props=>props.mobileNavbarIsOpen? "100vh;" :"auto;"}
        overflow-y: ${props=>props.mobileNavbarIsOpen? "hidden;" :"auto;"}
        
    }
`


function MyApp({ Component, pageProps }) {

    const [theme, setTheme] = useState("light");
    const [mobileNavbarIsOpen, setMobileNavbarOpen] = useState(false);

    function toggleTheme(){
        if (theme === "dark"){
            setTheme("light")
        }
        else{
            setTheme("dark");
        }
    }

    function isDarkMode(){
        return (theme==="dark");
    }

  return( 
    <ThemeContext.Provider value={theme === "dark" ? themes.dark : themes.light}>
        <GlobalStyle theme={theme} themes={themes} mobileNavbarIsOpen={mobileNavbarIsOpen}/>
        <Component currentTheme={theme} isDarkMode={isDarkMode} toggleTheme={toggleTheme} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen} {...pageProps} />
    </ThemeContext.Provider>
  )
}

export default MyApp;