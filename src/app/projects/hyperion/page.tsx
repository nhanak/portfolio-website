import ProjectPageDescription from "../../../components/ProjectPageDescription/ProjectPageDescription";
import PageSectionContainer from "../../../components/PageSectionContainer/PageSectionContainer";
import ProjectPageMediaGrid from "../../../components/ProjectPageMediaGrid/ProjectPageMediaGrid";
import Link_ from "../../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import PageTitleSection from "../../../components/PageTitleSection/PageTitleSection";
import ProjectPageGrid from "../../../components/ProjectPageGrid/ProjectPageGrid";
import ProjectSection from "../../../components/ProjectSection/ProjectSection";
import Head from "../../../components/head/Head";
import H3 from "../../../components/h3/H3";
import P from "../../../components/P/P";

export default function Hyperion() {
  const primary = "/images/projects/hyperion/Hyperion_Splash_Square.png";
  const secondary =
    "/images/projects/hyperion/Hyperion_Portfolio_Maximus_1_1.png";
  const tertiary =
    "/images/projects/hyperion/Hyperion_Portfolio_Maximus_1_2.png";
  return (
    <>
      <Head title="Hyperion // Website - Neil Hanak" />
      <PageTitleSection
        title="Hyperion // Website"
        titleMobile="Hyperion"
        descriptionMobile="// Website //"
      />
      <PageSectionContainer className="pb-2 bg-canvas-secondary rounded-lg">
        <ProjectSection className="mt-5 mb-1">
          <ProjectPageGrid>
            <ProjectPageMediaGrid
              primary={primary}
              secondary={secondary}
              tertiary={tertiary}
            />
            <ProjectPageDescription>
              <H3>Project</H3>
              <P>Hyperion</P>

              <H3>About</H3>
              <P>
                Hyperion is a company that builds websites for public companies.
                I built their website and other websites featured on the site.
              </P>
              <H3>Technologies Used</H3>
              <P>
                +{" "}
                <Link_
                  initialAccent={true}
                  className="text-xl"
                  href="https://www.pixijs.com/"
                  target="_blank"
                >
                  PixiJS
                </Link_>{" "}
                to create the water effect on the home page splash image{" "}
              </P>
              <P>
                +{" "}
                <Link_
                  initialAccent={true}
                  className="text-xl"
                  href="https://www.react-spring.io/"
                  target="_blank"
                >
                  react-spring
                </Link_>{" "}
                to create the parallax effect on the text on the home page
              </P>
              <P>
                +{" "}
                <Link_
                  initialAccent={true}
                  className="text-xl"
                  href="https://www.sanity.io/"
                  target="_blank"
                >
                  Sanity
                </Link_>{" "}
                to host blog content
              </P>
              <P>
                +{" "}
                <Link_
                  initialAccent={true}
                  className="text-xl"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  Next.js
                </Link_>{" "}
                for server side rendering
              </P>
              <P>
                +{" "}
                <Link_
                  initialAccent={true}
                  className="text-xl"
                  href="https://vercel.com/"
                  target="_blank"
                >
                  Vercel
                </Link_>{" "}
                for hosting
              </P>
            </ProjectPageDescription>
          </ProjectPageGrid>
        </ProjectSection>
      </PageSectionContainer>
    </>
  );
}
