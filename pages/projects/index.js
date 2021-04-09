import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ThemeContext } from "../../components/Theme/Theme";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";

export default function Projects() {
    const context = useContext(ThemeContext);
    return (
      <>
    <PageTitleSection title="Projects" description="Here are some of the things I've worked on" descriptionMobile="What I've worked on"/>
    <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
        <ProjectSection paddingTop={"5rem"} paddingBottom={"1rem"}>
            <ProjectCardsGrid>
                <ProjectCard title="Hyperion // Website" tags="Next.js, Vercel, Sanity" src="/images/Hyperion_Logo_Stars_Original.jpg" href="/projects/hyperion"/>
                <ProjectCard title="Up and Down // Multiplayer Game"  tags="Google Cloud Platform, Agones, Go" src="/images/Up_and_Down_Logo_Original.png" href="/projects/up-and-down"/>
            </ProjectCardsGrid>
        </ProjectSection>
    </PageSectionContainer>     
    </>
  )
}