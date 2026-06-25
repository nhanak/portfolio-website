import PageSectionContainer from "../../components/pageSectionContainer/PageSectionContainer";
import PageTitleSection from "../../components/pageTitleSection/PageTitleSection";
import ProjectCardsGrid from "../../components/projectCardsGrid/ProjectCardsGrid";
import ProjectSection from "../../components/projectSection/ProjectSection";
import ProjectCard from "../../components/projectCard/ProjectCard";

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
