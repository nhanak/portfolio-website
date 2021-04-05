import React, {useContext} from "react";
import styled from "styled-components";
import { Squash as Hamburger} from 'hamburger-react'
import { ThemeContext } from "../Theme/Theme";
//https://github.com/luukdv/hamburger-react

export default function NavButtonMobile(props){
    const context = useContext(ThemeContext);
    const {mobileNavbarIsOpen, setMobileNavbarOpen} = props;
    return (
        <HamburgerDivStyled theme={context}>
            <Hamburger toggled={mobileNavbarIsOpen} toggle={setMobileNavbarOpen} color="white" size={20} />
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
//    border:${props=>"1px solid "+props.theme.invertedPrimaryTextColor};
