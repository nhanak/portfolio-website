import React, {useContext} from "react";
import PageSectionContainer from "../../../components/PageSectionContainer/PageSectionContainer";
import H3 from "../../../components/H3/H3";
import P from "../../../components/P/P";
import ProjectSection from "../../../components/ProjectSection/ProjectSection";
import Link_ from "../../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import { ThemeContext } from "../../../components/Theme/Theme";
import PageTitleSection from "../../../components/PageTitleSection/PageTitleSection";
import ProjectPageMediaGrid from "../../../components/ProjectPageMediaGrid/ProjectPageMediaGrid";
import ProjectPageDescription from "../../../components/ProjectPageDescription/ProjectPageDescription";
import ProjectPageGrid from "../../../components/ProjectPageGrid/ProjectPageGrid";
import Head from "../../../components/Head/Head";

export default function UpAndDown() {
    const context = useContext(ThemeContext);
    const primary = "/images/projects/up-and-down/homescreen-square.png";
    const secondary = "/images/projects/up-and-down/gameplay-2.png";
    const tertiary = "/images/projects/up-and-down/gameplay-1.PNG";
    return (
      <>
        <Head title="Up and Down // Multiplayer Game - Neil Hanak"/>
        <PageTitleSection title="Up and Down // Multiplayer Game" titleMobile="Up and Down" descriptionMobile="// Multiplayer Game //"/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection  paddingTop={"5rem"} paddingBottom={"1rem"}>
                <ProjectPageGrid>
                    <ProjectPageMediaGrid primary={primary} secondary={secondary} tertiary={tertiary}/>
                    <ProjectPageDescription>
                        <H3>Project</H3>
                        <P>
                            <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://github.com/nhanak/up-and-down-source" target="_blank">https://github.com/nhanak/up-and-down-source</Link_>
                        </P>
                        <H3>About</H3>
                        <P>Up and Down was a multiplayer real-time strategy game I created. The goal of the game is to destroy your opponents base by spending your resources on units that would counter what your opponent was building.</P>
                        <H3>Technologies Used</H3>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://reactjs.org/" target="_blank">React</Link_> for the front end user interface</P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://golang.org/" target="_blank">Go</Link_> to handle back end logic</P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://agones.dev/site/" target="_blank">Agones</Link_> to manage multiplayer game servers</P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://cloud.google.com/" target="_blank">Google Cloud Platform</Link_> for hosting</P>
                    </ProjectPageDescription>
                </ProjectPageGrid>
            </ProjectSection>
        </PageSectionContainer>
    </>
  )
}