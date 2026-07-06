import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import LongFormTextSection from "../../components/LongFormTextSection/LongFormTextSection";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Head from "../../components/head/Head";
import P from "../../components/P/P";

export default function About() {
  return (
    <>
      <Head title="About - Neil Hanak" />
      <PageTitleSection
        centered={true}
        title="Hi, I'm Neil 👋"
        description="Nice to meet you."
      />
      <PageSectionContainer className="pb-2 bg-canvas-secondary rounded-lg px-20 pt-4">
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
              I really enjoy implementing user interfaces with React. Sometimes
              I do back-end stuff, like when I{" "}
              <Link_
                className="text-xl mr-2"
                href="/projects/up-and-down"
                initialAccent={true}
              >
                created a multiplayer game
              </Link_>
              using Go. I'm also a big fan of functional programming, so when
              I'm not using TypeScript you can probably catch me using Gleam and
              Haskell.
            </P>
            <P></P>
            <P>
              My GitHub account is{" "}
              <Link_
                initialAccent={true}
                className="text-xl mr-0"
                target="_blank"
                href="https://github.com/nhanak/"
              >
                nhanak
              </Link_>{" "}
              and you can find{" "}
              <Link_
                initialAccent={true}
                className="text-xl mr-0"
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
                className="text-xl mr-0"
                href="mailto:nhanak.contact@gmail.com"
              >
                nhanak.contact@gmail.com
              </Link_>{" "}
              or by filling out{" "}
              <Link_ href="/contact" initialAccent={true} className="text-xl">
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
