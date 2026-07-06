"use client";

import PageSectionContainer from "../../../components/PageSectionContainer/PageSectionContainer";
import LongFormTextSection from "../../../components/LongFormTextSection/LongFormTextSection";
import BlogSubSectionTitle from "../../../components/blogSubSectionTitle/BlogSubSectionTitle";
import BlogTitleSection from "../../../components/blogTitleSection/BlogTitleSection";
import ProjectSection from "../../../components/ProjectSection/ProjectSection";
import Head from "../../../components/head/Head";
import P from "../../../components/P/P";
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

export default function HoistingDoesNotExistInJavaScript() {
  return (
    <div>
      <Head title="Hoisting does not exist in JavaScript - Neil Hanak" />
      <BlogTitleSection
        title="Hoisting does not exist in JavaScript"
        date="April 13th, 2021"
        author="Neil Hanak"
      />
      <PageSectionContainer className="pb-2 bg-canvas-secondary rounded-lg lg:px-20">
        <ProjectSection className="mt-5 mb-1">
          <LongFormTextSection>
            <BlogSubSectionTitle>1. What is hoisting?</BlogSubSectionTitle>
            <P>
              Hoisting is the term used to reference how JavaScript appears to
              move declarations to the top of the current scope.
            </P>
            <P>Consider the following legal JavaScript code:</P>
            <ClientCodeBlock
              text={`x = 1;
console.log(x);
var x;`}
            />
            <P>
              Notice how we are able to access x on line 1 and 2, even though x
              was not declared until line 3. The common explanation is that the
              declaration of x was hoisted (moved to the top of the current
              scope), and that is why we are able to use it.
            </P>
            <BlogSubSectionTitle className="text-center">
              2. Why doesn't hoisting exist?
            </BlogSubSectionTitle>
            <P>
              Hoisting is actually just a metaphor for what is going on behind
              the scenes in the JavaScript Engine. Rightly or wrongly, it was
              decided by the community that a simple explanation would be more
              easily understandable than getting into the nitty gritty details
              of what JavaScript is actually doing. However, this handwaving can
              cause bugs and confusion if you don't know what JavaScript is
              actually doing.
            </P>
            <P>
              For example, consider the following code and try to guess what is
              logged to the console:
            </P>
            <ClientCodeBlock
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              If you guessed that the above code logs out "Neil" or "Jimmy", you
              would be wrong. The above code, when executed, logs out
              undefined.{" "}
            </P>
            <P>
              It is easy to make mistakes like this if you actually think
              JavaScript is moving your code around as is proposed by hoisting.
              There is however an easy way to predict the output of this code,
              as we'll learn below.
            </P>
            <BlogSubSectionTitle className="text-center">
              3. Behind the scenes of hoisting
            </BlogSubSectionTitle>
            <P>
              Understanding the inner workings of hoisting requires you to be
              aware of two things:
            </P>
            <P className="pl-2">
              1. JavaScript is a two pass system. It has a compilation phase
              followed by an execution phase.
            </P>
            <P className="pl-2">
              2. Scope and identifiers are defined in the compilation phase and
              then used in the execution phase.
            </P>
            <P>
              To understand what is going on in the compilation and execution
              phases, I am going to use a metaphor. In this metaphor, scopes are
              colored buckets, and identifiers are colored marbles. The
              compilation phase sets up the buckets and marbles, and the
              execution phase uses those buckets and marbles. Using this
              metaphor, we are going to walk through the compilation and
              execution phase of the code above as if it were a dialogue.
            </P>
            <BlogSubSectionTitle className="text-center">
              4. Compilation Phase Dialogue
            </BlogSubSectionTitle>
            <ClientCodeBlock
              highlight="1"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>Compiler</b>: Hey red bucket, do you have a red marble called
              person?
            </P>
            <P>
              <b>Global Scope (Red Bucket)</b>: Hey compiler, I do not have a
              red marble called person, but I will make one and put it in my
              bucket.
            </P>
            <ClientCodeBlock
              highlight="3"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>Compiler</b>: Hey red bucket, do you have a red marble called
              namePerson?
            </P>
            <P>
              <b>Global Scope (Red Bucket)</b>: Hey compiler, I do not have a
              red marble called namePerson, but I will make one and put it in my
              bucket.
            </P>
            <ClientCodeBlock
              highlight="5"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>Compiler</b>: Hey blue bucket, do you have a blue marble called
              person?{" "}
            </P>
            <P>
              <b>namePerson Scope (Blue Bucket)</b>: Hey compiler, I do not have
              a blue marble called person, but I will make one and put it in my
              bucket.
            </P>
            <BlogSubSectionTitle className="text-center">
              5. Execution Phase Dialogue
            </BlogSubSectionTitle>
            <ClientCodeBlock
              highlight="1"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>JavaScript Engine</b>: Hey red bucket, do you have a red marble
              called person?
            </P>
            <P>
              <b>Global Scope (Red Bucket)</b>: Hey JavaScript Engine, I have a
              red marble called person, here you go.
            </P>
            <P>
              <b>JavaScript Engine</b>: Thank you, I will put the value "Neil"
              into that red marble.
            </P>
            <ClientCodeBlock
              highlight="8"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>JavaScript Engine</b>: Hey red bucket, do you have a red marble
              called namePerson?
            </P>
            <P>
              <b>Global Scope (Red Bucket)</b>: Hey JavaScript Engine, I have a
              red marble called namePerson, here you go
            </P>
            <P>
              <b>JavaScript Engine</b>: Thank you, I will invoke this red marble
              called namePerson
            </P>
            <ClientCodeBlock
              highlight="4"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>JavaScript Engine</b>: Hey blue bucket, do you have a blue
              marble called person?
            </P>
            <P>
              <b>namePerson Scope (Blue Bucket)</b>: Hey JavaScript Engine, I
              have blue marble called person, here you go
            </P>
            <P>
              <b>JavaScript Engine</b>: Thank you, I will pass this blue marble
              into console.log
            </P>
            <ClientCodeBlock
              highlight="5"
              text={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}
            />
            <P>
              <b>JavaScript Engine</b>: Hey blue bucket, do you have a blue
              marble called person?
            </P>
            <P>
              <b>namePerson Scope (Blue Bucket)</b>: Hey JavaScript Engine, I
              have blue marble called person, here you go
            </P>
            <P>
              <b>JavaScript Engine</b>: Thank you, I will put "Jimmy" into this
              blue marble
            </P>
            <BlogSubSectionTitle className="text-center">
              5. Putting it all together
            </BlogSubSectionTitle>
            <P>
              The reason the code we went through step by step logs undefined to
              the console is because, while the blue bucket had a blue marble
              called person at line 4 in the execution phase, the blue marbles
              contents were not initialized at that point and so it contained
              the value undefined. At no point did JavaScript move code around
              like is suggested in hoisting.
            </P>
            <BlogSubSectionTitle className="text-center">
              6. Conclusion
            </BlogSubSectionTitle>
            <P>
              What is termed hoisting is actually a consequence of JavaScript
              being far more like a compiled language than an interpreted
              language. Like other compiled languages, JavaScript is a two pass
              system with a compilation and execution phase. Stepping through
              these phases with the colored buckets and marbles metaphor shows
              that hoisting does not actually exist in JavaScript - JavaScript
              never moves your code around. Instead, JavaScript sets up the
              scopes and identifiers in the compilation phase, and then these
              scopes and identifiers are available for use in the execution
              phase. While hoisting does not exist in JavaScript, it is a nice
              mental shorthand to explain why you can use identifiers before
              they are declared, as long as you understand what is actually
              going on. Now that you are armed with a clearer mental
              representation of what hoisting actually entails, you will create
              less bugs and be a more effective programmer.
            </P>
          </LongFormTextSection>
        </ProjectSection>
      </PageSectionContainer>
    </div>
  );
}
