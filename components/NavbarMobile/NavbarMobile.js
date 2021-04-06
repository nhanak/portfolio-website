import React, {useContext} from "react";
import styled, {keyframes,css} from "styled-components";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import { ThemeContext } from "../Theme/Theme";

export default function NavbarMobile(props){
    const context = useContext(ThemeContext);
    const {mobileNavbarIsOpen, setMobileNavbarOpen} = props;

    function handleExitClick(){
        setMobileNavbarOpen(false);
    }

    return (
        <NavbarMobileWrapper mobileNavbarIsOpen={mobileNavbarIsOpen}>
            <NavbarMobileDarkener mobileNavbarIsOpen={mobileNavbarIsOpen} onClick={handleExitClick}/>
            <NavbarMobileContent theme={context} >
                <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} fontSize="2.5rem" href="/">Neil Hanak</Link_>
                <NavbarMobileLinkWrapper>
                    <NavbarMobileItem>
                        <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryTextColor} href="/">Home</Link_>
                    </NavbarMobileItem>
                    <NavbarMobileItem>
                        <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryTextColor} href="/">Projects</Link_>
                    </NavbarMobileItem>
                    <NavbarMobileItem>
                        <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryTextColor} href="/">Blog</Link_>
                    </NavbarMobileItem>
                    <NavbarMobileItem>
                    <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryTextColor} href="/">About</Link_>
                    </NavbarMobileItem>
                </NavbarMobileLinkWrapper>
            </NavbarMobileContent>
        </NavbarMobileWrapper>
    )
}

const darken= keyframes`
0%{
    background-color:rgba(0,0,0,0);
}

100%{
    background-color:rgba(0,0,0,0.5);
}
`;

const slideRight = keyframes`
  from{
    transform: translateX(100%) translateZ(0px);
  }
  to{
    transform: translateX(0%) translateZ(0px);
  }
`

const NavbarMobileDarkener = styled.div`
    width:50%;
    height:100%;
`;

const NavbarMobileContent = styled.div`
    padding-top:4rem;
    padding-left:3rem;
    width:100%;
    height:100%;
    background-color:${props=>props.theme.secondaryBackgroundColor};
    animation:${slideRight} 0.7s ease;

    @media (min-width: 768px) {
        padding-left:4rem;
     }
`

const NavbarMobileItem = styled.div`
     margin-bottom:1rem;
     margin-top:1rem;
`

const NavbarMobileLinkWrapper = styled.div`
    display:flex;
    flex-direction:column;
    font-size:2rem;
    height:80%;
    justify-content:center;
    @media (min-width: 768px) {
        font-size:3rem;
     }
`

const NavbarMobileWrapper = styled.div`
    width:100vw;
    height:100%;
    position:fixed;
    top:0;
    display: ${props=>props.mobileNavbarIsOpen ? "flex;":"none;"}
    animation: ${props=>props.mobileNavbarIsOpen ? css`${darken} 0.5s ease;`:css`${darken} 0.5s ease reverse;`}
    background-color:${props=>props.mobileNavbarIsOpen ? "rgba(0,0,0,0.5);":"rgba(0,0,0,0);"}
`