import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";

export default function Footer(){
    const context = useContext(ThemeContext);
    return (
            <PageSectionContainer marginTop="50px" borderTop="1px solid grey">
                <FooterStyled>
                    <FooterStartStyled>
                        <FooterText theme={context}>Made with&nbsp; 
                            <FooterSpanLink theme={context} href="/">Next.js</FooterSpanLink>
                            &nbsp;and&nbsp;
                             <FooterSpanLink theme={context} href="/">Sanity</FooterSpanLink> 
                             . Hosted on&nbsp;
                             <FooterSpanLink theme={context} href="/">Vercel</FooterSpanLink>
                        </FooterText>
                        <FooterText theme={context}>MIT License © 2021–present  <FooterSpanLink theme={context} href="/">Neil Hanak</FooterSpanLink></FooterText>
                        <FooterText theme={context}>Made with ❤️ in Canada</FooterText>
                    </FooterStartStyled>
                    <FooterEndStyled>
                        <FooterLink theme={context} href={"/"}>Blog</FooterLink>
                        <FooterLink theme={context} href={"/"}>Projects</FooterLink>
                        <FooterLink theme={context} href={"/"}>About</FooterLink>
                    </FooterEndStyled>
                </FooterStyled>
            </PageSectionContainer>
    )
}


const FooterStyled = styled.div`
    display:flex;
    margin-top:50px;
    font-size:1.6rem;
    padding-bottom:50px;
`

const FooterStartStyled = styled.div`
    display:flex;
    width:50%;
    flex-direction:column;
    align-items:flex-start;
`

const FooterEndStyled = styled.div`
    display:flex;
    width:50%;
    flex-direction:column;
    align-items:flex-end;
`

const FooterText = styled.p`
    color: ${props=>props.theme.primaryTextColor};
    margin:0px;
    margin-bottom:20px;
`

const FooterLink = styled.a`
    color: ${props=>props.theme.primaryTextColor};
    margin-bottom:20px;
`

const FooterSpanLink = styled.a`
    color:${props=>props.theme.primaryAccentColor};
`
