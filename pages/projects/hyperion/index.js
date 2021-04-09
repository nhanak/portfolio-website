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

export default function Hyperion() {
    const context = useContext(ThemeContext);
    const primary = "/images/projects/hyperion/Hyperion_Splash_Square.png";
    const secondary = "/images/projects/hyperion/Hyperion_Portfolio_Maximus_1_1.png";
    const tertiary = "/images/projects/hyperion/Hyperion_Portfolio_Maximus_1_2.png";
    return (
      <>
        <PageTitleSection title="Hyperion // Website" titleMobile="Hyperion" descriptionMobile="// Website //"/>
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
                        <P>Hyperion is a company that builds websites for public companies. I built their website and other websites featured on the site.</P>
                        <H3>Technologies Used</H3>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://www.pixijs.com/" target="_blank">PixiJS</Link_> to create the water effect on the home page splash image </P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://www.react-spring.io/" target="_blank">react-spring</Link_>  to create the parallax effect on the text on the home page</P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://www.sanity.io/" target="_blank">Sanity</Link_> to host blog content</P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://nextjs.org/" target="_blank">Next.js</Link_> for server side rendering</P>
                        <P>+ <Link_ initialColor={context.primaryAccentColor} hoverColor={context.primaryAccentColor} href="https://vercel.com/" target="_blank">Vercel</Link_> for hosting</P>
                    </ProjectPageDescription>
                </ProjectPageGrid>
            </ProjectSection>
        </PageSectionContainer>
    </>
  )
}