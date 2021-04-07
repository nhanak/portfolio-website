import React, {useContext, useState} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import FlatButton from "../FlatButton/FlatButton";
import NavbarItem from "./NavbarItem";
import DarkModeToggle from "react-dark-mode-toggle";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import ReactOutlineManager from 'react-outline-manager';
import Link from 'next/link';


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
                    <Link href="/" passHref>
                        <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="/">Neil Hanak</Link_>
                    </Link>
                </LogoDivStyled>
                <LinkDivStyled  theme={context}>
                    <LinkInnerDivStyled>
                        <DisappearOnMobile>
                            <NavbarItem>
                                <Link href="/blog" passHref>
                                    <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor}>Blog</Link_>
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/projects" passHref>
                                    <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor}>Projects</Link_>
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/about" passHref>
                                    <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor}>About</Link_>
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/contact" passHref>
                                    <FlatButton theme={context} href="/">Say hello</FlatButton>
                                </Link>
                            </NavbarItem>
                        </DisappearOnMobile>
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

const DisappearOnMobile = styled.div`
    display:inherit;
    @media (max-width: 991px){
        display:none;
    }
`

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
    font-size:1.8rem;
    margin:0px;
    font-weight:bold;
    @media (max-width: 950px){
        width:50%;
    }
`

const LinkDivStyled = styled.div`
    display:flex;
    justify-content:flex-end;
    width:75%;
    color: ${(props)=>props.theme.primaryTextColor};
    @media (max-width: 950px){
        width:50%;
    }
`

const LinkInnerDivStyled = styled.div`
    display:flex;
    align-items:center;
`