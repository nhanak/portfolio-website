import React, {useContext, useState} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import FlatButton from "../FlatButton/FlatButton";
import NavbarItem from "./NavbarItem";
import DarkModeToggle from "react-dark-mode-toggle";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import ReactOutlineManager from 'react-outline-manager';


export default function Navbar(props){
    const context = useContext(ThemeContext);

    const isDarkMode = props.isDarkMode();

    function changeTheme(){
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
                            <Link_ fontSize="1.6rem" initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor} href="/">Blog</Link_>
                        </NavbarItem>
                        <NavbarItem>
                            <Link_ fontSize="1.6rem" initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor} href="/">Projects</Link_>
                        </NavbarItem>
                        <NavbarItem>
                            <Link_ fontSize="1.6rem" initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor} href="/">About</Link_>
                        </NavbarItem>
                        <NavbarItem>
                             <FlatButton theme={context} href="/">Say hello</FlatButton>
                        </NavbarItem>
                        <NavbarItem>
                            <ReactOutlineManager toggle={true}>
                                <DarkModeToggle onChange={changeTheme} checked={isDarkMode} size={"6rem"}/>
                            </ReactOutlineManager>
                        </NavbarItem>
                    </LinkInnerDivStyled>
                </LinkDivStyled>
            </NavbarStyled>
        </PageSectionContainer>
    )
}

const NavbarStyled = styled.nav`
    display:flex;
    padding-top:3rem;
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