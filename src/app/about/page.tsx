import PageSectionContainer from "../../components/pageSectionContainer/PageSectionContainer";
import Link_ from "../../components/linkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import LongFormTextSection from "../../components/longFormTextSection/LongFormTextSection";
import PageTitleSection from "../../components/pageTitleSection/PageTitleSection";
import ProjectSection from "../../components/projectSection/ProjectSection";
import Head from "../../components/head/Head";
import P from "../../components/p/P";

export default function About() {
  return (
    <>
      <Head title="About - Neil Hanak" />
      <PageTitleSection
        centered={true}
        title="Hi, I'm Neil 👋"
        description="Nice to meet you."
      />
      <PageSectionContainer className="pb-2 bg-canvas-secondary rounded-lg">
        <ProjectSection className="mt-5 mb-1">
          <LongFormTextSection>
            <P>
              I'm a Senior Frontend Developer with around 9 years of experience
              creating performant and maintainable solutions for employers and
              clients. This is my portfolio website containing some of the
              projects I've worked on, as well as a blog where I talk about some
              of the things I've learned/have been thinking about.
            </P>
            <P>
              I really enjoy implementing front-end user interfaces with React.
              Sometimes I do back-end stuff, like when I{" "}
              <Link_ href="/projects/up-and-down" initialAccent={true}>
                {" "}
                created a multiplayer game
              </Link_>
              using Go. My favorite languages are JavaScript, Python and Go.
            </P>
            <P></P>
            <P>
              My GitHub account is{" "}
              <Link_
                initialAccent={true}
                target="_blank"
                href="https://github.com/nhanak/"
              >
                nhanak
              </Link_>{" "}
              and you can find{" "}
              <Link_
                initialAccent={true}
                target="_blank"
                href="https://github.com/nhanak/portfolio-website"
              >
                the source for this site
              </Link_>{" "}
              there.
            </P>
            <P>
              You can reach me at{" "}
              <Link_
                initialAccent={true}
                href="mailto:nhanak.contact@gmail.com"
              >
                nhanak.contact@gmail.com
              </Link_>{" "}
              or by filling out{" "}
              <Link_ href="/contact" initialAccent={true}>
                my contact form
              </Link_>
              .
            </P>
            <P>- Neil</P>
          </LongFormTextSection>
        </ProjectSection>
      </PageSectionContainer>
    </>
  );
}
