//import '../styles/globals.css';
import React, {useState} from "react";
import { ThemeContext, themes} from "../components/Theme/Theme";
import { createGlobalStyle } from 'styled-components';
import { PageTransition } from 'next-page-transitions'

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

function MyApp({ Component, pageProps, router }) {
    const [isDarkMode, setDarkMode] = useState(false);
    const [mobileNavbarIsOpen, setMobileNavbarOpen] = useState(false);

    function toggleTheme(){
        setDarkMode(!isDarkMode);
    }

  return( 
    <ThemeContext.Provider value={isDarkMode ? themes.dark : themes.light}>
        <GlobalStyle isDarkMode={isDarkMode} themes={themes} mobileNavbarIsOpen={mobileNavbarIsOpen}/>
        <PageContainer toggleTheme={toggleTheme} isDarkMode={isDarkMode} mobileNavbarIsOpen={mobileNavbarIsOpen} setMobileNavbarOpen={setMobileNavbarOpen}>
        <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          
          }
          .page-transition-enter-active {
            opacity: 1;
            animation: moveUp 300ms ease;
            transform:translateY(0%);
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }

          @keyframes moveUp {
            0% {
                opacity:0;
                transform:translateY(30%)
            }
            100% {
                opacity:1;
                transform:translateY(0%)
            }
        }
        `}</style>
        </PageContainer>
    </ThemeContext.Provider>
  )
}

export default MyApp;