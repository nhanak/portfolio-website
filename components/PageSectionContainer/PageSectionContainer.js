import React from "react";
import styled from "styled-components";

export default function PageSectionContainer(props){
    return(
        <PageSectionContainerStyled marginTop={props.marginTop} paddingBottom={props.paddingBottom} roundedEdges={props.roundedEdges} borderTop={props.borderTop} backgroundColor={props.backgroundColor}>
            {props.children}
        </PageSectionContainerStyled>
    )
}

const PageSectionContainerStyled = styled.div`
    padding-left:40px;
    padding-right:40px;
    ${props=>props.paddingBottom && `padding-bottom:${props.paddingBottom};`}
    ${props=>props.roundedEdges && `border-radius:10px;`}
    ${props=>props.borderTop && `border-top:${props.borderTop};`}
    ${props=>props.marginTop && `margin-top:${props.marginTop};`}
    ${props=>props.backgroundColor && `background-color:${props.backgroundColor};`}

    @media (max-width:75rem){

        border-radius:0;
    }
`