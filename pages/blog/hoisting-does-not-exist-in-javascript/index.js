import React, {useContext} from "react";
import PageSectionContainer from "../../../components/PageSectionContainer/PageSectionContainer";
import P from "../../../components/P/P";
import H3 from "../../../components/H3/H3";
import ProjectSection from "../../../components/ProjectSection/ProjectSection";
import { ThemeContext } from "../../../components/Theme/Theme";
import BlogTitleSection from "../../../components/BlogTitleSection/BlogTitleSection";
import { CodeBlock, dracula } from "react-code-blocks";

export default function HoistingDoesNotExistInJavaScript() {
    const context = useContext(ThemeContext);
    return (
      <>
        <BlogTitleSection title="Hoisting does not exist in JavaScript" date="April 13th, 2021" author="Neil Hanak"/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection  paddingTop={"2rem"} paddingBottom={"1rem"}>
                <H3>1. What is hoisting?</H3>
                <P>Hoisting is the term used to reference how JavaScript appears to move declarations to the top of the current scope.</P>
                <P>Consider the following legal JavaScript code:</P>
                <CodeBlock theme={dracula} text ={`x = 1;
console.log(x);
var x;`}/>      
                <P>Notice how we are able to access x on line 1 and 2, even though x was not declared until line 3. The common explanation is that the declaration of x was hoisted (moved to the top of the current scope), and that is why we are able to use it.</P>
                <H3>2. Why doesn't hoisting exist?</H3>
                <P>Hoisting is actually just a metaphor for what is going on behind the scenes in the JavaScript Engine. Rightly or wrongly, it was decided by the community that a simple explanation would be more easily understandable. However, 
this handwaving can cause bugs and confusion if you don't know what JavaScript is actually doing.</P>
                <P>For example, consider the following code and try to guess what is logged to the console:</P>
                <CodeBlock theme={dracula} text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P>If you guessed that the above code logs out "Neil" or "Jimmy", you would be wrong. The above code, when executed, logs out undefined. </P>
            <P>It is easy to make mistakes like this if you actually think JavaScript is moving your code around as is proposed by hoisting. There is however an easy way to predict the output of this code, as we'll learn below.</P>
            <H3>3. Behind the scenes of hoisting</H3>
            <P>Understanding the inner workings of hoisting requires you to be aware of two things:</P>
            <P paddingLeft="2.5rem;">1. JavaScript is a two pass system. It has a compilation phase which is followed by an execution phase.</P>
            <P paddingLeft="2.5rem;">2. Scope and identifiers are defined in the compilation phase and then used in the execution phase.</P>
            <P>To understand what is going on in the compilation and execution phases, I am going to use a metaphor. In this metaphor, scopes are colored buckets, and identifiers are colored marbles. The compilation phase sets up the buckets and marbles, and the execution phase uses those buckets and marbles.</P> 
            <P> Using this metaphor, we are going to walk through the compilation and execution phase of the code above as if it were a dialogue.</P>
            <H3>4. Compilation Phase Dialogue</H3>
            <CodeBlock theme={dracula} highlight="1" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>Compiler</b>: Hey red bucket, do you have a red marble called person?</P>
            <P><b>Global Scope (Red Bucket)</b>: Hey compiler, I do not have a red marble called person, but I will make one and put it in my bucket.</P>
            <CodeBlock theme={dracula} highlight="3" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>Compiler</b>: Hey red bucket, do you have a red marble called namePerson?</P>
            <P><b>Global Scope (Red Bucket)</b>: Hey compiler, I do not have a red marble called namePerson, but I will make one and put it in my bucket.</P>
            <CodeBlock theme={dracula} highlight="5" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>Compiler</b>: Hey blue bucket, do you have a blue marble called person? </P>
            <P><b>namePerson Scope (Blue Bucket)</b>: Hey compiler, I do not have a blue marble called person, but I will make one and put it in my bucket.</P>
            <H3>5. Execution Phase Dialogue</H3>
            <CodeBlock theme={dracula} highlight="1" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>JavaScript Engine</b>: Hey red bucket, do you have a red marble called person?</P>
            <P><b>Global Scope (Red Bucket)</b>: Hey JavaScript Engine, I have a red marble called person, here you go.</P>
            <P><b>JavaScript Engine</b>: Thank you, I will put the value "Neil" into that red marble.</P>
            <CodeBlock theme={dracula} highlight="8" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>JavaScript Engine</b>: Hey red bucket, do you have a red marble called namePerson?</P>
            <P><b>Global Scope (Red Bucket)</b>: Hey JavaScript Engine, I have a red marble called namePerson, here you go</P>
            <P><b>JavaScript Engine</b>: Thank you, I will invoke this red marble called namePerson</P>
            <CodeBlock theme={dracula} highlight="4" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>JavaScript Engine</b>: Hey blue bucket, do you have a blue marble called person?</P>
            <P><b>namePerson Scope (Blue Bucket)</b>: Hey JavaScript Engine, I have blue marble called person, here you go</P>
            <P><b>JavaScript Engine</b>: Thank you, I will pass this blue marble into console.log</P>
            <CodeBlock theme={dracula} highlight="5" text ={`var person = "Neil"

function namePerson(){
    console.log(person);
    var person = "Jimmy";
}

namePerson();`}/>
            <P><b>JavaScript Engine</b>: Hey blue bucket, do you have a blue marble called person?</P>
            <P><b>namePerson Scope (Blue Bucket)</b>: Hey JavaScript Engine, I have blue marble called person, here you go</P>
            <P><b>JavaScript Engine</b>: Thank you, I will put "Jimmy" into this blue marble</P>
            <H3>5. Putting it all together</H3>
            <P>The reason the code we went through step by step logs undefined to the console is because, while the blue bucket had a blue marble called person at line 4 in the execution phase, the blue marbles contents were not initialized at that point and so it contained the value undefined.</P>
            <P>At no point did JavaScript move code around like is suggested in hoisting.</P>
            <H3>6. Conclusion</H3>
            <P>What is termed hoisting is actually a consequence of JavaScript being far more like a compiled language than an interpreted language. Like other compiled languages, JavaScript is a two pass system with a compilation and execution phase. Stepping through these phases with the colored buckets and marbles metaphor shows that hoisting does not actually exist in JavaScript - JavaScript never moves your code around. The term hoisting is not bad however. It is a nice mental shorthand to explain why you can use identifiers before they are declared. Understanding what is actually going on behind the scenes in hoisting will save a lot of time solving bugs related to it.</P>
            </ProjectSection>
        </PageSectionContainer>
    </>
  )
}