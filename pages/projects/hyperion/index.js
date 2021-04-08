import React, {useContext} from "react";
import PageSectionContainer from "../../../components/PageSectionContainer/PageSectionContainer";
import styled from "styled-components";
import H3 from "../../../components/H3/H3";
import P from "../../../components/P/P";
import ProjectSection from "../../../components/ProjectSection/ProjectSection";
import Link_ from "../../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import { ThemeContext } from "../../../components/Theme/Theme";
import PageTitleSection from "../../../components/PageTitleSection/PageTitleSection";

export default function Hyperion() {
    const context = useContext(ThemeContext);
    return (
      <>
        <PageTitleSection title="Hyperion Website"/>
        <ProjectPageContainer>
            <PageSectionContainer roundedEdges={true} backgroundColor={context.secondaryBackgroundColor}>
            <ProjectSection  paddingTop={"5rem"} paddingBottom={"1rem"}>
                <ProjectPageGrid>
                    <ProjectPageMediaGrid>
                        <LeadProjectMedia src="/images/Hyperion_Logo_Stars_Original.jpg"/>
                        <SecondaryProjectMedia src="/images/Hyperion_Logo_Stars_Original.jpg"/>
                        <TertiaryProjectMedia src="/images/Hyperion_Logo_Stars_Original.jpg"/>
                    </ProjectPageMediaGrid>
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
        </ProjectPageContainer>
    </>
  )
}

const ProjectPageContainer = styled.div`
`

const ProjectPageDescription = styled.div`
    grid-area:descriptionArea;
    text-align:left;
    padding-left:5rem;
`

const ProjectPageGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "mediaArea descriptionArea";
     }
`

const LeadProjectMedia = styled.img`
    max-width:100%;
    grid-area:leadProjectMedia;
    src={props.src};
`

const SecondaryProjectMedia = styled.img`
    max-width:100%;
    grid-area:secondaryProjectMedia;
    src={props.src};
`

const TertiaryProjectMedia = styled.img`
    max-width:100%;
    grid-area:tertiaryProjectMedia;
    src={props.src};
`

const ProjectPageMediaGrid = styled.div`
     display:grid;
     grid-gap:10px;
     grid-area:mediaArea;
     grid-template-columns:1fr 1fr;
     grid-template-rows: 1fr 1fr;
     grid-template-areas:
        "leadProjectMedia leadProjectMedia"
        "secondaryProjectMedia tertiaryProjectMedia";
`