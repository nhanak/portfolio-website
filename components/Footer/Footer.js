import React, {useContext} from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import Link from 'next/link';

export default function Footer(){
    const context = useContext(ThemeContext);
    return (
            <PageSectionContainer marginTop="50px" borderTop="1px solid grey">
                <FooterStyled>
                    <FooterStartStyled>
                        <FooterText theme={context}>Made with&nbsp; 
                            <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://nextjs.org/" target="_blank">Next.js</Link_>
                            , hosted on&nbsp;
                             <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://vercel.com/" target="_blank">Vercel</Link_>
                        </FooterText>
                        <FooterText theme={context}>MIT License © 2021–present  <Link href="/" passHref><Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor}>Neil Hanak</Link_></Link></FooterText>
                        <FooterText theme={context}>Made with ❤️ in Canada</FooterText>
                    </FooterStartStyled>
                    <FooterEndStyled>
                        <FooterLinkItem>
                            <Link href="/projects" passHref>
                                <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor}>
                                    Projects
                                </Link_>
                            </Link>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <Link href="/blog" passHref>
                                <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor}>
                                    Blog
                                </Link_>
                            </Link>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <Link href="/about" passHref>
                                <Link_ initialColor={context.primaryTextColor} hoverColor={context.primaryAccentColor}>
                                    About
                                </Link_>
                            </Link>
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