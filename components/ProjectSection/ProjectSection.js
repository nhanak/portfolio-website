import React from "react";
import styled from "styled-components";

export default function ProjectSection(props){
    const {paddingBottom, paddingTop} = props;
    return(
        <ProjectSectionStyled paddingBottom={paddingBottom} paddingTop={paddingTop}>
            {props.children}
        </ProjectSectionStyled>
    )
}

const ProjectSectionStyled = styled.div`
    ${props=>props.paddingBottom && `padding-bottom:${props.paddingBottom};`}
    ${props=>props.paddingTop && `padding-top:${props.paddingTop};`}
`