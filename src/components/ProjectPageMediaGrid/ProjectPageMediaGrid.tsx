import React from "react";
import styled from "styled-components";

export default function ProjectPageMediaGrid(props){
    const {primary, secondary, tertiary} = props;
    return(
        <ProjectPageMediaGridStyled>
            <LeadProjectMediaDiv>
                <ProjectMedia src={primary}/>
            </LeadProjectMediaDiv>
            <SecondaryProjectMediaDiv>
                <ProjectMedia src={secondary}/>
            </SecondaryProjectMediaDiv>
            <TertiaryProjectMediaDiv>
                <ProjectMedia src={tertiary}/>
            </TertiaryProjectMediaDiv>
        </ProjectPageMediaGridStyled>
    )
}

const LeadProjectMediaDiv = styled.div`
     width:100%;
     height:100%;
     grid-area:leadProjectMedia;
`

const ProjectMedia = styled.img`
border-radius:10px;
    width:100%;
    height:100%;
    object-fit:cover;
    src={props.src};
`

const SecondaryProjectMediaDiv = styled.div`
    width:100%;
    height:100%;
    grid-area:secondaryProjectMedia;
`

const TertiaryProjectMediaDiv = styled.div`
    width:100%;
    height:100%;
    grid-area:tertiaryProjectMedia;
`

const ProjectPageMediaGridStyled = styled.div`
     display:grid;
     grid-gap:10px;
     grid-area:mediaArea;
     grid-template-columns:1fr;
     grid-template-areas:
        "leadProjectMedia"
        "secondaryProjectMedia"
        "tertiaryProjectMedia";
     @media (min-width: 768px) {
        grid-template-columns:1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "leadProjectMedia leadProjectMedia"
            "secondaryProjectMedia tertiaryProjectMedia";
     }
`