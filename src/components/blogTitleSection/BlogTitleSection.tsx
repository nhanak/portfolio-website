import PageSectionContainer from "../pageSectionContainer/PageSectionContainer";
import styled from "styled-components";
import H1 from "../h1/H1";
import P from "../p/P";

export default function BlogTitleSection({title, date, author}) {
    return (
      <>
        <PageSectionContainer>
            <PageTitleSectionStyled>
                <PageTitleSectionTextContentStyled>
                    <H1>{title}</H1>
                    <P>{date} - {author}</P>
                </PageTitleSectionTextContentStyled>
            </PageTitleSectionStyled>
        </PageSectionContainer>
    </>
  )
}

const PageTitleSectionStyled = styled.div`
    margin-top:2.5rem;
    display:flex;
    align-items:center;
    flex-direction:column;
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

const PageTitleSectionTextContentStyled = styled.div`
     text-align:center;
`
