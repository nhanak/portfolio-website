import PageSectionContainer from "../pageSectionContainer/PageSectionContainer";
import Link_ from "../linkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import styled from "styled-components";

export default function Footer() {
  return (
    <PageSectionContainer marginTop="50px" borderTop="1px solid grey">
      <FooterStyled>
        <FooterStartStyled>
          <FooterText className="text-primary text-base">
            Made with&nbsp;
            <Link_
              href="https://nextjs.org/"
              initialAccent={true}
              target="_blank"
            >
              Next.js
            </Link_>
            , hosted on&nbsp;
            <Link_
              href="https://vercel.com/"
              target="_blank"
              initialAccent={true}
            >
              Vercel
            </Link_>
          </FooterText>
          <FooterText className="text-primary text-base">
            MIT License © 2021–present{" "}
            <Link_ href="/" initialAccent={true}>
              Neil Hanak
            </Link_>
          </FooterText>
          <FooterText className="text-primary text-base">
            Made with ❤️ in Canada
          </FooterText>
        </FooterStartStyled>
        <FooterEndStyled>
          <FooterLinkItem>
            <Link_ href="/projects">Projects</Link_>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link_ href="/blog">Blog</Link_>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link_ href="/about">About</Link_>
          </FooterLinkItem>
        </FooterEndStyled>
      </FooterStyled>
    </PageSectionContainer>
  );
}

const FooterStyled = styled.div`
  display: flex;
  margin-top: 50px;
  font-size: 1.6rem;
  padding-bottom: 50px;
`;

const FooterStartStyled = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    width: 50%;
    align-items: flex-start;
  }
`;

const FooterEndStyled = styled.div`
  width: 0%;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 992px) {
    display: flex;
    width: 50%;
  }
`;

const FooterText = styled.p`
  margin: 0px;
  margin-bottom: 20px;
`;

const FooterLinkItem = styled.div`
  margin-bottom: 20px;
`;
