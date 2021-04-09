import React from "react";
import styled from "styled-components";

export default function PageSectionContainer(props){
    return(
        <PageSectionContainerStyled borderBottomMobile={props.borderBottomMobile} marginTop={props.marginTop} paddingBottom={props.paddingBottom} roundedEdges={props.roundedEdges} borderTop={props.borderTop} backgroundColor={props.backgroundColor}>
            {props.children}
        </PageSectionContainerStyled>
    )
}

const PageSectionContainerStyled = styled.div`
    padding-left:2.5rem;
    padding-right:2.5rem;
    ${props=>props.borderBottomMobile && `border-bottom: 1px solid grey;`}
    ${props=>props.paddingBottom && `padding-bottom:${props.paddingBottom};`}
    ${props=>props.borderTop && `border-top:${props.borderTop};`}
    ${props=>props.marginTop && `margin-top:${props.marginTop};`}
    ${props=>props.backgroundColor && `background-color:${props.backgroundColor};`}
    border-radius:0;
    @media (min-width: 992px) { 
        border-bottom:0px;
     }
    @media (min-width:992px){
        ${props=>props.roundedEdges && `border-radius:10px;`}
        padding-left:40px;
        padding-right:40px;
    }
`