"use client";

import PageSectionContainer from "../../../components/pageSectionContainer/PageSectionContainer";
import LongFormTextSection from "../../../components/longFormTextSection/LongFormTextSection";
import BlogSubSectionTitle from "../../../components/blogSubSectionTitle/BlogSubSectionTitle";
import BlogTitleSection from "../../../components/blogTitleSection/BlogTitleSection";
import ProjectSection from "../../../components/projectSection/ProjectSection";
import Head from "../../../components/head/Head";
import P from "../../../components/p/P";
import UL from "../../../components/ul/UL";
import LI from "../../../components/li/LI";
import dynamic from "next/dynamic";

const ClientCodeBlock = dynamic(
  () => import("../../../components/clientCodeBlock/ClientCodeBlock"),
  {
    loading: () => (
      <div className="bg-slate-900 h-32 w-full rounded-md animate-pulse" />
    ),
    ssr: false,
  },
);

export default function PickingAProgrammingLanguage() {
  return (
    <div>
      <Head title="Picking a programming language - Neil Hanak" />
      <BlogTitleSection
        title="Picking a programming language"
        date="June 29th, 2026"
        author="Neil Hanak"
      />
      <PageSectionContainer className="pb-2 bg-canvas-secondary rounded-lg px-20">
        <ProjectSection className="mt-5 mb-1">
          <LongFormTextSection>
            <BlogSubSectionTitle>1. Hammer or wrench</BlogSubSectionTitle>
            <P>
              It's a beautiful summer afternoon and you are building a chicken
              coop in your backyard. You have a bunch of nails, some wood, a
              wrench and a hammer. You want to drive the nails through the wood
              to make the frame, so you pick up the hammer and get to work.
            </P>
            <P>
              Why didn't you use the wrench to hit the nails? After all, a
              wrench is perfectly capable of hammering in some nails. However,
              intuitively you knew there would be some drawbacks to using the
              wrench as a hammer. A wrench is made for twisting, and a hammer
              for striking. This difference in intended use leads to all sorts
              of different design decisions between the two that make them
              excellent at what they are meant for, but worse at what they are
              not.
            </P>
            <P>
              While you can use a wrench as a hammer (or a hammer as a wrench),
              thats not where either of them shine. Using a hammer in a
              situation that requires a hammer and a wrench in a situation that
              requires a wrench works best. The right tool for the right job
              makes your life easy. It's the same thing with programming
              languages. Using the right one in the right situation can make the
              impossible feel trivial. Using the wrong one can make the trivial
              feel impossible. Programs are a bit more abstract than hammering
              in nails, so when it comes to programming languages, how do we
              choose the right one?
            </P>
            <BlogSubSectionTitle className="text-center">
              2. Metrics
            </BlogSubSectionTitle>
            <P>
              As far as I can tell there are three main metrics when judging
              what language to use: ecosystem, developer experience, and
              performance,
            </P>
            <BlogSubSectionTitle className="text-center">
              Ecosystem
            </BlogSubSectionTitle>
            <P>
              When we talk about ecosystem, we're talking about the community
              that surrounds a given language. Some questions you might ask
              about ecosystem are:
            </P>
            <UL>
              <LI>
                How often is this language used to solve problems like the one
                your program is trying to solve?
              </LI>
              <LI>How many people are already using this language?</LI>
              <LI>
                How many libraries/packages are available for this language?
              </LI>
              <LI>
                How many people would be interested in learning this language?
              </LI>
              <LI>How long has the language been in use?</LI>
            </UL>
            <BlogSubSectionTitle className="text-center">
              Developer experience
            </BlogSubSectionTitle>
            <P>
              When we talk about developer experience, we are focused on how the
              engineers working on a program written in this language feel. Some
              questions you might ask about developer experience are:
            </P>
            <UL>
              <LI>Do you already know this language?</LI>
              <LI>Does the language have comfortable syntax?</LI>
              <LI> How easy is the language to learn?</LI>
              <LI>How easy is the language to understand?</LI>
              <LI>How easy is it to add/remove packages?</LI>
              <LI>Does the language match the engineers personal taste?</LI>
              <LI>How long does it take to compile?</LI>
              <LI>
                How easy is it to make changes to a program developed in this
                language?
              </LI>
              <LI>How easily can it be deployed?</LI>
              <LI>What is the tooling around the language like?</LI>
              <LI>How easy is it to debug?</LI>
              <LI>Does the language have a built in REPL?</LI>
              <LI>What programming paradigms does this language support?</LI>
              <LI> Is the language statically typed?</LI>
              <LI>
                How much do you need to know about the language to be
                productive?
              </LI>
            </UL>
            <BlogSubSectionTitle className="text-center">
              Performance
            </BlogSubSectionTitle>
            <P>
              When we talk about performance, we are talking about how will a
              program written in this language perform as it is running. There
              are many facets to performance, such as:
            </P>
            <UL>
              <LI>How much memory and processing power is consumed? </LI>
              <LI>How fast can it complete a given operation? </LI>
              <LI>How fast is it with a single core?</LI>
              <LI>
                How easy is it to make the program make use of multiple cores?
              </LI>
              <LI>How easily does it scale?</LI>
              <LI>How fault tolerant is it?</LI>
            </UL>
            <BlogSubSectionTitle className="text-center">
              3. Tradeoffs
            </BlogSubSectionTitle>
            <P>
              As with everything else in engineering, there are tradeoffs in
              programming language selection. All languages have their own
              strengths and weaknesses. It really depends on whether or not
              those strengths make up for the weaknesses for the problem you are
              trying to solve.
            </P>
            <P>
              There are many programming languages out there and I can't cover
              them all, but here's a brief overview of some languages and their
              tradeoffs.
            </P>
            <P>
              If you are most worried about having the best possible run time
              performance, systems programming languages like C++ or Rust are
              your best bet. These languages are like razors, very easy to make
              mistakes and cut yourself resulting in a difficult and slow
              development experience, but also the most performant when it comes
              to memory usage and processing power. Video games, high frequency
              trading, and operating systems are all domains where these
              languages shine as they place the most importance on raw
              performance.
            </P>
            <P>
              If you are worried about maturity, stability, having a large
              talent pool and massive ecosystem, C# or Java can be great
              choices. Enterprise software is often made with these languages as
              they have stood the test of time, and are still flexible and
              performant enough to handle a wide variety of use cases.
              Starbucks, Walmart, Intel, and Cisco all use C#. Amazon, Netflix,
              Meta all use Java. The drawbacks of these languages is that they
              are not as performant as the systems programming languages like
              C++, and since they are so mature they can be bloated and verbose.
            </P>
            <P>
              If you want to do anything natively in web browsers, JavaScript
              (and TypeScript that compiles down to JavaScript) is the defacto
              standard. If you've used any website with complex user
              interactions, its very likely that JavaScript was used to make it.
              The main drawback is performance, JavaScript was designed to be
              used in the browser, and is not as performant outside of that
              domain (i.e. on the server).
            </P>
            <P>
              If you are doing AI and Data Science tasks, Python is a great
              choice. As it is taught in universities, there is a large
              ecosystem of people using it for scientific purposes. It's also
              pretty easy to learn. The drawback is that Python runs quite
              slowly compared to most other languages.
            </P>
            <P>
              If you are worried about performance and ease of development in a
              cloud environment, Go is a great choice. It was specifically made
              by Google to be easy to learn and fast to run. The main drawback
              is because of its simplicity, it can feel too verbose at times.
            </P>
            <P>
              If you are most worried about correctness of your program, you
              would be well served by Haskell. Some domains where correctness is
              most important are military, finance, and microchips. Standard
              Chartered (bank), Palantir (military software contractor), MatX
              (microchip startup) all use Haskell. The drawback of Haskell is
              its smaller ecosystem, and increased difficulty in optimizing
              performance compared to other languages.
            </P>
            <P>
              If you are worried about scalability, and fault tolerance, any
              language that runs on the BEAM (Elixir/Erlang/Gleam) is a great
              choice. Discord and Slack both use Elixir to handle the massive
              amount of messages between users each day. The drawback of these
              languages is poorer performance on tasks that don't need to be
              scaled and comparitively smaller ecosystems.
            </P>
            <BlogSubSectionTitle className="text-center">
              4. Exceptions
            </BlogSubSectionTitle>
            <P>
              The above overview is a heuristic, and there are of course
              "exceptions". For these "exceptions" the language choice can feel
              surprising, until you consider tradeoffs that were consciously
              being made.
            </P>
            <P>
              Figma, a web application for designing user interfaces, has its
              user interface written in C++ which is compiled into webassembly.
              This was done because for their use case they wanted the best raw
              performance that JavaScript could not match.
            </P>
            <P>
              The videogame Minecraft was originally written in Java because
              thats what the creator was most familiar with and it allowed him
              to rapidly prototype and "chase the fun", something that would
              have been more difficult in a language he was unfamiliar with. It
              was eventually re-written in C++ after the game had become a
              success and performance became a concern.
            </P>
            <P>
              Haskell is used at Facebook (a social media web application) to
              prevent spam. Being an expressive functional language made it
              easier to create a highly concurrent, spam filtering rule engine
              compared to using other languages.
            </P>
            <BlogSubSectionTitle className="text-center">
              5. Conclusion
            </BlogSubSectionTitle>
            <P>
              There is no one perfect language for all situations. Even for
              languages that excel in a certain domain, there may be valid
              reasons to choose an alternative that better matches the problem
              you are trying to solve. By thinking about what your program
              places the most importance on, and what tradeoffs you are willing
              to make will result in the best outcome
            </P>
          </LongFormTextSection>
        </ProjectSection>
      </PageSectionContainer>
    </div>
  );
}
