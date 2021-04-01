import React from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import PageSectionContainer from "../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styled from "styled-components";
import H1 from "../components/H1/H1";
import H2 from "../components/H2/H2";
import P from "../components/P/P";

export default function Home(props) {
  return (
      <PageContainer toggleTheme={props.toggleTheme}>
        <PageSectionContainer>
                <HeroSectionStyled>
                    <HeroSectionTextContentStyled>
                        <H1>Hi, my name is Neil 👋</H1>
                        <P>I code human friendly interfaces, and I love what I do.</P>
                        <P>For business inquiries I can be reached at neil@info.com</P>
                    </HeroSectionTextContentStyled>
                </HeroSectionStyled>
        </PageSectionContainer>
        <PageSectionContainer roundedEdges={true} backgroundColor="#2A2A2A">
            <ProjectSectionStyled>
                <H2>Projects</H2>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                </ProjectCardsGrid>
            </ProjectSectionStyled>
        </PageSectionContainer>     
            <PageSectionContainer roundedEdges={true} marginTop="40px" backgroundColor="#2A2A2A">
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
    height:320px;
    align-items:flex-end;
    margin-bottom:50px;
`

const HeroSectionTextContentStyled= styled.div`


`

const ProjectSectionStyled = styled.div`
    padding-top:10px;
    padding-bottom:10px;

`