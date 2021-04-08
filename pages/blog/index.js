import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import { ThemeContext } from "../../components/Theme/Theme";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";


export default function Blog() {
    const context = useContext(ThemeContext);
    return (
      <>
      <PageTitleSection title="Blog" description="Here are some of my thoughts"/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection paddingTop={"5rem"} paddingBottom={"1rem"}>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                </ProjectCardsGrid>
            </ProjectSection>
        </PageSectionContainer> 
    </>
  )
}