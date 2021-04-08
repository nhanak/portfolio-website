import React, {useContext} from "react";
import PageSectionContainer from "../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styled from "styled-components";
import H1 from "../components/H1/H1";
import H2 from "../components/H2/H2";
import P from "../components/P/P";
import { ThemeContext } from "../components/Theme/Theme";
import Link_ from "../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import ProjectSection from "../components/ProjectSection/ProjectSection";

import PageTitleSection from "../components/PageTitleSection/PageTitleSection";

export default function Home() {
    const context = useContext(ThemeContext);
    return (
      <>
        <PageTitleSection title="Hi, I'm Neil 👋" description="I code human friendly interfaces, and I love what I do."/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSection paddingTop={"10px"} paddingBottom={"10px"}>
                <H2>Projects</H2>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/Hyperion_Logo_Stars_Original.jpg" href="/projects/hyperion"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/Up_and_Down_Logo_Original.png" href="/"/>
                </ProjectCardsGrid>
            </ProjectSection>
        </PageSectionContainer>     
        <PageSectionContainer roundedEdges={true} marginTop="40px" backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSection paddingTop={"10px"} paddingBottom={"10px"}>
                <H2>Blog</H2>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/projects/hyperion"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                </ProjectCardsGrid>
            </ProjectSection>
        </PageSectionContainer> 
    </>
  )
}