import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import P from "../../components/P/P";
import { ThemeContext } from "../../components/Theme/Theme";


export default function Blog() {
    const context = useContext(ThemeContext);
    return (
      <>
        <PageSectionContainer>
            <HeroSectionStyled>
                <HeroSectionTextContentStyled>
                    <H1>Blog</H1>
                    <P>Here are some of my thoughts</P>
                </HeroSectionTextContentStyled>
            </HeroSectionStyled>
        </PageSectionContainer>
        <PageSectionContainer roundedEdges={true} marginTop="40px" backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSection paddingTop={"10rem"} paddingBottom={"10px"}>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
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

