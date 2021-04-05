import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";

export default function Footer(){
    const context = useContext(ThemeContext);
    return (
            <PageSectionContainer marginTop="50px" borderTop="1px solid grey">
                <FooterStyled>
                    <FooterStartStyled>
                        <FooterText theme={context}>Made with&nbsp; 
                            <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="/">Next.js</Link_>
                            &nbsp;and&nbsp;
                            <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="/">Sanity</Link_>
                             . Hosted on&nbsp;
                             <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="/">Vercel</Link_>
                        </FooterText>
                        <FooterText theme={context}>MIT License © 2021–present  <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="/">Neil Hanak</Link_></FooterText>
                        <FooterText theme={context}>Made with ❤️ in Canada</FooterText>
                    </FooterStartStyled>
                    <FooterEndStyled>
                        <FooterLinkItem>
                            <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor} href="/">
                                Blog
                            </Link_>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor} href="/">
                                Projects
                            </Link_>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor} href="/">
                                About
                            </Link_>
                        </FooterLinkItem>
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
    width:100%;
    display:flex;
    text-align:center;
    flex-direction:column;
    align-items:center;
    @media (min-width:992px){
        width:50%;
        align-items:flex-start;
    }
`

const FooterEndStyled = styled.div`
    width:0%;
    display:none;
    flex-direction:column;
    align-items:flex-end;
    @media (min-width:992px){

        display:flex;
        width:50%;
    }
`

const FooterText = styled.p`
    color: ${props=>props.theme.primaryTextColor};
    margin:0px;
    margin-bottom:20px;
`

const FooterLinkItem = styled.div`
    margin-bottom:20px;
`