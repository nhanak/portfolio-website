import React, {useContext, useState} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import FlatButton from "../FlatButton/FlatButton";
import NavbarItem from "./NavbarItem";
import DarkModeToggle from "react-dark-mode-toggle";


export default function Navbar(props){
    const context = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(()=>true);

    function changeTheme(){
        setIsDarkMode(!isDarkMode);
        props.toggleTheme();
    }

    return(
        <PageSectionContainer>
            <NavbarStyled>
                <LogoDivStyled theme={context}>
                    <LogoStyled href="/">Neil Hanak</LogoStyled>
                </LogoDivStyled>
                <LinkDivStyled  theme={context}>
                    <LinkInnerDivStyled>
                        <NavbarItem>
                            <DarkModeToggle onChange={changeTheme} checked={isDarkMode} size={60}/>
                        </NavbarItem>
                        <NavbarItem>
                            <LinkStyled href="/">Blog</LinkStyled>
                        </NavbarItem>
                        <NavbarItem>
                            <LinkStyled href="/">Projects</LinkStyled>
                        </NavbarItem>
                        <NavbarItem>
                            <LinkStyled href="/">About</LinkStyled>
                        </NavbarItem>
                        <NavbarItem>
                             <FlatButton href="/">Say hello</FlatButton>
                        </NavbarItem>
                    </LinkInnerDivStyled>
                </LinkDivStyled>
            </NavbarStyled>
        </PageSectionContainer>
    )
}

const NavbarStyled = styled.nav`
    display:flex;
    padding-top:4rem;
`

const LogoDivStyled = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:25%;
    color: ${(props)=>props.theme.primaryAccentColor};
`

const LogoStyled = styled.a`
    font-size:1.8rem;
    margin:0px;
    font-weight:bold;
`

const LinkDivStyled = styled.div`
    display:flex;
    justify-content:flex-end;
    width:75%;
    color: ${(props)=>props.theme.primaryTextColor};
`

const LinkInnerDivStyled = styled.div`
    display:flex;
    align-items:center;
`
const LinkStyled = styled.a`
    margin:0px;
    font-size:1.6rem;
`