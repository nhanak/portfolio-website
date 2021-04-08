import React from "react";
import PageSectionContainer from "../../components/PageSectionContainer/PageSectionContainer";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import P from "../../components/P/P";

export default function PageTitleSection({title, description}) {
    return (
      <>
        <PageSectionContainer>
            <PageTitleSectionStyled>
                <PageTitleSectionTextContentStyled>
                    <H1>{title}</H1>
                    <P>{description}</P>
                </PageTitleSectionTextContentStyled>
            </PageTitleSectionStyled>
        </PageSectionContainer>
    </>
  )
}

const PageTitleSectionStyled = styled.div`
    margin-top:5rem;
    display:flex;
    align-items:flex-end;
    margin-bottom:3rem;
`

const PageTitleSectionTextContentStyled= styled.div`


`

