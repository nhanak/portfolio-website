import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import styled from "styled-components";
import H1 from "../H1/H1";
import P from "../P/P";

export default function BlogTitleSection({ title, date, author }) {
  return (
    <>
      <PageSectionContainer className="pb-[0px]">
        <PageTitleSectionStyled>
          <PageTitleSectionTextContentStyled>
            <H1>{title}</H1>
            <P>
              {date} - {author}
            </P>
            <P className="text-sm italic pt-0">
              No A.I. was used in the production of this blog post
            </P>
          </PageTitleSectionTextContentStyled>
        </PageTitleSectionStyled>
      </PageSectionContainer>
    </>
  );
}

const PageTitleSectionStyled = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0rem;
  @media (min-width: 576px) {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 992px) {
    margin-top: 2rem;
    margin-bottom: 0rem;
  }
`;

const PageTitleSectionTextContentStyled = styled.div`
  text-align: center;
`;
