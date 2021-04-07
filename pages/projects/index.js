import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import P from "../../components/P/P";
import { ThemeContext } from "../../components/Theme/Theme";
import ProjectSection from "../../components/ProjectSection/ProjectSection";


export default function Projects() {
    const context = useContext(ThemeContext);
    return (
      <>
            <PageSectionContainer>
                <HeroSectionStyled>
                    <HeroSectionTextContentStyled>
                        <H1>Projects</H1>
                        <P>Here are some of the projects I've worked on</P>
                    </HeroSectionTextContentStyled>
                </HeroSectionStyled>
            </PageSectionContainer>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSection paddingTop={"10rem"} paddingBottom={"10px"}>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/Hyperion_Logo_Stars_Original.jpg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/Up_and_Down_Logo_Original.png" href="/"/>
                </ProjectCardsGrid>
            </ProjectSection>
        </PageSectionContainer>     
    </>
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

