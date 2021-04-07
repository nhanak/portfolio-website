import React, {useContext, useState} from "react";
import styled, {keyframes,css} from "styled-components";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import { ThemeContext } from "../Theme/Theme";
import { enableBodyScroll } from 'body-scroll-lock';
import Link from 'next/link';

// The reason this is a class component instead of a functional component
// is so that we can get a ref and lock the body from NavButtonMobile
export default class NavbarMobile extends React.Component{
    static contextType = ThemeContext;
    constructor(props){
        super(props);
        this.state = {
            mobileNavbarHasOpened: false,
        }
    }

    handleExitClick = () =>{
        const {setMobileNavbarOpen} = this.props;
        enableBodyScroll(this);
        setMobileNavbarOpen(false);
    }

    // I do not want the nav to "close" if it has never been opened in the first place
    componentDidUpdate(prevProps, prevState){
        if (this.props.mobileNavbarIsOpen && (prevState.mobileNavbarHasOpened === false)){
            this.setState({mobileNavbarHasOpened:true});
        }
    }

    render(){
        const {mobileNavbarIsOpen, setMobileNavbarOpen} = this.props;
        const {mobileNavbarHasOpened} = this.state;
        return (
            <NavbarMobileWrapper mobileNavbarIsOpen={mobileNavbarIsOpen} mobileNavbarHasOpened={mobileNavbarHasOpened}>
                <NavbarMobileDarkener mobileNavbarIsOpen={mobileNavbarIsOpen} onClick={this.handleExitClick} />
                <NavbarMobileContent theme={this.context} mobileNavbarIsOpen={mobileNavbarIsOpen}>
                    <Link_ initialColor={this.context.primaryAccentColor} hoverColor={this.context.primaryAccentColor} fontSize="2.5rem" href="/">Neil Hanak</Link_>
                    <NavbarMobileLinkWrapper>
                        <NavbarMobileItem>
                            <Link href="/" passHref>
                                <Link_ initialColor={this.context.primaryAccentColor} hoverColor={this.context.primaryTextColor}>Home</Link_>
                            </Link>
                        </NavbarMobileItem>
                        <NavbarMobileItem>
                            <Link href="/projects" passHref>
                                <Link_ initialColor={this.context.primaryAccentColor} hoverColor={this.context.primaryTextColor}>Projects</Link_>
                            </Link>
                        </NavbarMobileItem>
                        <NavbarMobileItem>
                            <Link href="/blog" passHref>
                                <Link_ initialColor={this.context.primaryAccentColor} hoverColor={this.context.primaryTextColor}>Blog</Link_>
                            </Link>
                        </NavbarMobileItem>
                        <NavbarMobileItem>
                            <Link href="/about" passHref>
                                <Link_ initialColor={this.context.primaryAccentColor} hoverColor={this.context.primaryTextColor}>About</Link_>
                            </Link>
                        </NavbarMobileItem>
                        <NavbarMobileItem>
                            <Link href="/contact" passHref>
                                <Link_ initialColor={this.context.primaryAccentColor} hoverColor={this.context.primaryTextColor}>Contact</Link_>
                            </Link>
                        </NavbarMobileItem>
                    </NavbarMobileLinkWrapper>
                </NavbarMobileContent>
            </NavbarMobileWrapper>
        )
    }
}

const darken= keyframes`
    0%{
        background-color:rgba(0,0,0,0);
    }

    100%{
        background-color:rgba(0,0,0,0.5);
    }
`;

const lighten = keyframes`
    0%{
        background-color:rgba(0,0,0,0.5);
        
    }
    100%{
        background-color:rgba(0,0,0,0);
    }
`;

const dissapear = keyframes`
    0%{
        transform: translateX(0%) translateZ(0px);
    }
    99%{
        transform: translateX(0%) translateZ(0px);
    }
    100%{
        transform: translateX(100%) translateZ(0px);
    }
`

const slideRight = keyframes`
  from {
    transform: translateX(0%) translateZ(0px);
  }
  to {
    transform: translateX(100%) translateZ(0px);
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(100%) translateZ(0px);
  }
  to {
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
    animation:${props=>props.mobileNavbarIsOpen ? css`${slideLeft} 0.5s ease` : css`${slideRight} 0.30s ease`};
    transform:${props=>props.mobileNavbarIsOpen ?  "translateX(0%) translateZ(0px)" : "translateX(100%) translateZ(0px)"};

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
    display: flex;
    top:0;
    transform:${props=>props.mobileNavbarIsOpen ? "translateX(0%) translateZ(0px)" : "translateX(100%) translateZ(0px)"};
    animation: ${props=>props.mobileNavbarIsOpen ?  css`${darken} 0.5s ease, ${slideLeft} 0s`: (props.mobileNavbarHasOpened ? css`${lighten} 0.3s ease, ${dissapear} 0.3s`:"")};
    background-color:${props=>(props.mobileNavbarIsOpen ? "rgba(0,0,0,0.5)": "rgba(0,0,0,0)")};
`