import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import P from "../../components/P/P";
import { ThemeContext } from "../../components/Theme/Theme";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation"
import LongFormTextSection from "../../components/LongFormTextSection/LongFormTextSection";
import Link from 'next/link';
import Head from "../../components/Head/Head";

export default function About() {
    const context = useContext(ThemeContext);
    return (
      <>
        <Head title="About - Neil Hanak"/>
        <PageTitleSection centered={true} title="Hi, I'm Neil 👋" description="Nice to meet you."/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection  paddingTop="2rem" paddingBottom="1rem">
                <LongFormTextSection>
                    <P>I'm a Software Developer with around 4 years of experience creating solutions for employers and clients. This is my portfolio website containing some of the projects I've worked on, as well as a blog where I talk about some of the things I've learned/have been thinking about.</P>
                    <P>I really enjoy implementing front-end user interfaces with React. Sometimes I do back-end stuff, like when I <Link href="/projects/up-and-down" passHref><Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor}> created a multiplayer game</Link_></Link> using Go. My favorite languages are JavaScript, Python and Go.</P>
                    <P></P>
                    <P>My GitHub account is <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} target="_blank" href="https://github.com/nhanak/">nhanak</Link_> and you can find <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} target="_blank" href="https://github.com/nhanak/portfolio-website">the source for this site</Link_> there.</P>
                    <P>You can reach me at <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="mailto:neilhanak@info.com">neilhanak@info.com</Link_> or by filling out <Link href="/contact" passHref><Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor}>my contact form</Link_></Link>.</P>
                    <P>- Neil</P>
                </LongFormTextSection>
            </ProjectSection>
        </PageSectionContainer>     
    </>
  )
}