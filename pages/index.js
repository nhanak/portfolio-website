import React, {useContext} from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import PageSectionContainer from "../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styled from "styled-components";
import H1 from "../components/H1/H1";
import H2 from "../components/H2/H2";
import P from "../components/P/P";
import { ThemeContext } from "../components/Theme/Theme";
import Link_ from "../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";

export default function Home(props) {

    const context = useContext(ThemeContext);
  return (
      <PageContainer toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} mobileNavbarIsOpen={props.mobileNavbarIsOpen} setMobileNavbarOpen={props.setMobileNavbarOpen}>
            <PageSectionContainer>
                <HeroSectionStyled>
                    <HeroSectionTextContentStyled>
                        <H1>Hi, I'm Neil 👋</H1>
                        <P>I code human friendly interfaces, and I love what I do.</P>
                        <P>For business inquiries I can be reached at <Link_ href="/" initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor}>neil@info.com</Link_></P>
                    </HeroSectionTextContentStyled>
                </HeroSectionStyled>
            </PageSectionContainer>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSectionStyled>
                <H2>Projects</H2>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/Hyperion_Logo_Stars_Original.jpg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/Up_and_Down_Logo_Original.png" href="/"/>
                </ProjectCardsGrid>
            </ProjectSectionStyled>
        </PageSectionContainer>     
        <PageSectionContainer roundedEdges={true} marginTop="40px" backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSectionStyled>
                <H2>Blog</H2>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                </ProjectCardsGrid>
            </ProjectSectionStyled>
        </PageSectionContainer> 
    </PageContainer>
  )
}

const HeroSectionStyled = styled.div`
    display:flex;
    height:26rem;
    align-items:flex-end;
    margin-bottom:50px;
`

const HeroSectionTextContentStyled= styled.div`


`

const ProjectSectionStyled = styled.div`
    padding-top:10px;
    padding-bottom:10px;

`