import React, {useContext} from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import P from "../../components/P/P";
import { ThemeContext } from "../../components/Theme/Theme";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation"

export default function About() {
    const context = useContext(ThemeContext);
    return (
      <>
        <PageTitleSection title="About"/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection  paddingTop="2rem" paddingBottom="1rem">
                <P>Hi, my name is Neil, nice to meet you.</P>
                <P>I really enjoy implementing front-end user interfaces. Sometimes I do back-end stuff.</P>
                <P>You can even find <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} target="_blank" href="https://github.com/nhanak/portfolio-website">the source for this site</Link_> on my GitHub account.</P>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum urna id semper ultrices. Nullam diam eros, tempus ut sapien nec, fermentum aliquet nisl. Fusce a augue nec turpis faucibus tempus vel sed lorem. Donec pellentesque ante vitae faucibus lobortis. Nulla facilisi. Nullam in arcu sit amet justo dictum ornare ac at justo. Nunc hendrerit euismod sem, et volutpat nulla porta nec. Nam elementum congue cursus. In egestas consequat mi, eget lobortis est accumsan eget. Nam elit nisi, faucibus vel mauris a, hendrerit tincidunt tortor. Etiam tempus ante justo, non porttitor mauris laoreet eu. Nam malesuada elit nec dolor tempor convallis. Morbi congue aliquet ipsum id efficitur. Donec non pharetra neque, vel volutpat purus. Nunc finibus sollicitudin sapien sed facilisis.</P>
            </ProjectSection>
        </PageSectionContainer>     
    </>
  )
}