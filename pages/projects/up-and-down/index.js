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

export default function UpAndDown() {
    const context = useContext(ThemeContext);
    const primary = "/images/Up_and_Down_Logo_Original.png";
    const secondary = "/images/Up_and_Down_Logo_Original.png";
    const tertiary = "/images/Up_and_Down_Logo_Original.png";
    return (
      <>
        <PageTitleSection title="Up and Down // Multiplayer Game" titleMobile="Up and Down" descriptionMobile="// Multiplayer Game //"/>
        <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor} paddingBottom="2rem">
            <ProjectSection  paddingTop={"5rem"} paddingBottom={"1rem"}>
                <ProjectPageGrid>
                    <ProjectPageMediaGrid primary={primary} secondary={secondary} tertiary={tertiary}/>
                    <ProjectPageDescription>
                        <H3>Project</H3>
                        <P>
                            <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://hyperion.sh" target="_blank">https://hyperion.sh</Link_>
                        </P>
                        <H3>About</H3>
                        <P>Up and Down was a multiplayer RTS game I created.</P>
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