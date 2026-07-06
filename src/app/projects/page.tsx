import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
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
