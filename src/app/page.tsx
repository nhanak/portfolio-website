"use client";

import PageSectionContainer from "../components/pageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../components/projectCardsGrid/ProjectCardsGrid";
import PageTitleSection from "../components/pageTitleSection/PageTitleSection";
import ProjectSection from "../components/projectSection/ProjectSection";
import ProjectCard from "../components/projectCard/ProjectCard";
import Head from "../components/head/Head";
import H2 from "../components/h2/H2";

export default function Home() {
  return (
    <>
      <Head title="Neil Hanak" />
      <PageTitleSection
        title="Hi, I'm Neil 👋"
        description="Senior Frontend Developer with nine years of experience developing human friendly user interfaces"
      />
      <PageSectionContainer>
        <ProjectSection>
          <H2>Projects</H2>
          <ProjectCardsGrid>
            <ProjectCard
              title="Hyperion // Website"
              tags="Next.js, Vercel"
              src="/images/projects/hyperion/hyperion_stars_cropped_huge_final_2.png"
              href="/projects/hyperion"
            />
            <ProjectCard
              title="Up and Down // Multiplayer Game"
              tags="Google Cloud Platform, Agones, Go"
              src="/images/projects/up-and-down/Up_and_Down_Logo_Original.png"
              href="/projects/up-and-down"
            />
          </ProjectCardsGrid>
        </ProjectSection>
      </PageSectionContainer>
      <PageSectionContainer>
        <ProjectSection>
          <H2>Blog</H2>
          <ProjectCardsGrid>
            <ProjectCard
              title="Hoisting does not exist in JavaScript"
              tags="April 13th, 2021"
              src="/images/blog/hoisting-does-not-exist-in-javascript/hoisting-image.png"
              href="/blog/hoisting-does-not-exist-in-javascript"
            />
          </ProjectCardsGrid>
        </ProjectSection>
      </PageSectionContainer>
    </>
  );
}
