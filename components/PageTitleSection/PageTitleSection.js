import React from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import P from "../../components/P/P";

export default function PageTitleSection({title, description, titleMobile, descriptionMobile, centered}) {
    return (
      <>
        <PageSectionContainer>
            <PageTitleSectionStyled centered={centered}>
                <PageTitleSectionTextContentStyled centered={centered}>
                    <H1>{title}</H1>
                    <P>{description}</P>
                </PageTitleSectionTextContentStyled>
                <PageTitleSectionTextContentMobileStyled centered={centered}>
                    <H1>{titleMobile?titleMobile:title}</H1>
                    <P>{descriptionMobile?descriptionMobile:description}</P>
                </PageTitleSectionTextContentMobileStyled>
            </PageTitleSectionStyled>
        </PageSectionContainer>
    </>
  )
}

const PageTitleSectionStyled = styled.div`
    margin-top:2.5rem;
    display:flex;
    ${props=>props.centered ? "align-items:center": "align-items:flex-end"};
    ${props=>props.centered && "justify-content:center;"}
    margin-bottom:3.5rem;
    @media (min-width: 576px) { 
        margin-top:1.5rem;
        margin-bottom:3rem;
     }
     @media (min-width: 992px) { 
        margin-top:2rem;
        margin-bottom:3rem;
     }
`

const PageTitleSectionTextContentStyled= styled.div`
    display:none;
    ${props=>props.centered && "text-align:center;"}
    @media (min-width:992px){
        display:block;
    }
`

const PageTitleSectionTextContentMobileStyled= styled.div`
    display:block;
    ${props=>props.centered && "text-align:center;"}
    @media (min-width:992px){
        display:none;
    }
`