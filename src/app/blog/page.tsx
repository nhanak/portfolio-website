import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Head from "../../components/head/Head";

export default function Blog() {
  return (
    <>
      <Head title="Blog - Neil Hanak" />
      <PageTitleSection
        title="Blog"
        description="Here are some of my thoughts"
      />
      <PageSectionContainer>
        <ProjectSection>
          <ProjectCardsGrid>
            <ProjectCard
              title="Picking a programming language"
              tags="June 29th, 2026"
              src="/images/blog/languages.png"
              href="/blog/picking-a-programming-language"
            />
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
