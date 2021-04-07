import React, {useContext} from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import ProjectCardsGrid from "../../components/ProjectCardsGrid/ProjectCardsGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import P from "../../components/P/P";
import { ThemeContext } from "../../components/Theme/Theme";
import Link_ from "../../components/LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import Link from 'next/link';


export default function Home(props) {

    const context = useContext(ThemeContext);
  return (
      <>
            <PageSectionContainer>
                <HeroSectionStyled>
                    <HeroSectionTextContentStyled>
                        <H1>Contact</H1>
                        <P>If you wish to reach me</P>
                        <P></P>
                    </HeroSectionTextContentStyled>
                </HeroSectionStyled>
            </PageSectionContainer>
        <PageSectionContainer roundedEdges={true} marginTop="40px" backgroundColor={context.secondaryBackgroundColor} paddingBottom="30px">
            <ProjectSectionStyled>
                <H2>Blog</H2>
                <ProjectCardsGrid>
                    <ProjectCard title="Hyperion Website" tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                    <ProjectCard title="Up and Down Game"  tags="Next.js, Vercel" src="/images/lighthouse.jpeg" href="/"/>
                </ProjectCardsGrid>
            </ProjectSectionStyled>
        </PageSectionContainer> 
    </>
  )
}

const HeroSectionStyled = styled.div`
    display:flex;
    height:26rem;
    align-items:flex-end;
    margin-bottom:50px;
`

const HeroSectionTextContentStyled= styled.div`


`

const ProjectSectionStyled = styled.div`
    padding-top:10px;
    padding-bottom:10px;

`