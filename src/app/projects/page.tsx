import PageSectionContainer from "../../components/pageSectionContainer/PageSectionContainer";
import PageTitleSection from "../../components/pageTitleSection/PageTitleSection";
import ProjectCardsGrid from "../../components/projectCardsGrid/ProjectCardsGrid";
import ProjectSection from "../../components/projectSection/ProjectSection";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Head from "../../components/head/Head";

export default function Projects() {
  return (
    <>
      <Head title="Projects - Neil Hanak" />
      <PageTitleSection
        title="Projects"
        description="Here are some of the things I've worked on"
        descriptionMobile="What I've worked on"
      />
      <PageSectionContainer>
        <ProjectSection>
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
    </>
  );
}
