import styled from "styled-components";
import H1 from "../h1/H1";
import P from "../p/P";

export default function PageTitleSection({
  title,
  description,
  titleMobile,
  descriptionMobile,
  centered = false,
}: {
  title: string;
  description?: string;
  titleMobile?: string;
  descriptionMobile?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`pl-10 mt-2 flex mb-10 text-primary w-full ${centered ? "text-center justify-items-center flex-col" : "justify-items-start"}`}
    >
      <div>
        <H1>{title}</H1>
        <P>{description}</P>
      </div>
      <PageTitleSectionTextContentMobileStyled>
        <H1>{titleMobile ? titleMobile : title}</H1>
        <P>{descriptionMobile ? descriptionMobile : description}</P>
      </PageTitleSectionTextContentMobileStyled>
    </div>
  );
}

// const PageTitleSectionStyled = styled.div`
//   margin-top: 2.5rem;
//   display: flex;
//   ${(props) =>
//     props.centered ? "align-items:center" : "align-items:flex-end"};
//   ${(props) => props.centered && "justify-content:center;"}
//   margin-bottom:3.5rem;
//   @media (min-width: 576px) {
//     margin-top: 1.5rem;
//     margin-bottom: 3rem;
//   }
//   @media (min-width: 992px) {
//     margin-top: 2rem;
//     margin-bottom: 3rem;
//   }
// `;

// const PageTitleSectionTextContentStyled = styled.div`
//   display: none;
//   ${(props) => props.centered && "text-align:center;"}
//   @media (min-width:992px) {
//     display: block;
//   }
// `;

const PageTitleSectionTextContentMobileStyled = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;
