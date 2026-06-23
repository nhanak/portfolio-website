import React from "react";
import styled from "styled-components";

export default function ProjectSection(props){
    const {paddingBottom, paddingTop, hasSectionHeader} = props;
    return(
        <ProjectSectionStyled paddingBottom={paddingBottom} paddingTop={paddingTop} hasSectionHeader={hasSectionHeader}>
            {props.children}
        </ProjectSectionStyled>
    )
}

const ProjectSectionStyled = styled.div`
    padding-top:3rem;
    padding-bottom:3rem;
    ${props=>props.hasSectionHeader && `padding-top:2rem;`}
    @media (min-width: 768px) { 
        ${props=>props.paddingBottom && `padding-bottom:${props.paddingBottom};`}
        ${props=>props.paddingTop && `padding-top:${props.paddingTop};`}
    }
`