import React, {useContext} from "react";
import styled from "styled-components";
import { Squash as Hamburger} from 'hamburger-react'
import { ThemeContext } from "../Theme/Theme";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
//https://github.com/luukdv/hamburger-react

export default function NavButtonMobile(props){
    const context = useContext(ThemeContext);
    const {mobileNavbarIsOpen, setMobileNavbarOpen, navRef} = props;

    function toggleMobileNavBar(val){
        console.log(navRef);
        if (!mobileNavbarIsOpen){
            disableBodyScroll(navRef);
        }
        else{
            enableBodyScroll(navRef);
        }
        setMobileNavbarOpen(val);
    }
    return (
        <HamburgerDivStyled theme={context}>
            <Hamburger toggled={mobileNavbarIsOpen} toggle={toggleMobileNavBar} color="white" size={20} />
        </HamburgerDivStyled>
    )
}

const HamburgerDivStyled = styled.div`
    border-radius:100px;
    position:fixed;
    bottom:0px;
    right:0px;
    background-color:${props=>props.theme.primaryAccentColor}aa;
    margin:1rem;
    border:1px solid white;

    @media (min-width:992px){
        display:none;
    }
`

