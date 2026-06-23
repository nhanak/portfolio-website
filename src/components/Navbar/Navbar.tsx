import PageSectionContainer from "../pageSectionContainer/PageSectionContainer";
import Link_ from "../linkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import ReactOutlineManager from "react-outline-manager";
import FlatButton from "../flatButton/FlatButton";
import { ThemeContext } from "../theme/Theme";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";
import { useContext,  } from "react";
import Link from "next/link";






//import DarkModeToggle from "react-dark-mode-toggle";



export default function Navbar(props) {
  const context = useContext(ThemeContext);

  const { isDarkMode } = props;

  function changeTheme() {
    props.toggleTheme();
  }

  return (
    <PageSectionContainer borderBottomMobile={true}>
      <NavbarStyled>
        <LogoDivStyled theme={context}>
          <Link_
            href="/"
            initialColor={context.primaryAccentColor}
            hoverColor={context.primaryAccentColor}
          >
            Neil Hanak
          </Link_>
        </LogoDivStyled>
        <LinkDivStyled theme={context}>
          <LinkInnerDivStyled>
            <DisappearOnMobile>
              <NavbarItem>
                <Link_
                  href="/projects"
                  initialColor={context.primaryTextColor}
                  hoverColor={context.primaryAccentColor}
                >
                  Projects
                </Link_>
              </NavbarItem>
              <NavbarItem>
                <Link_
                  href="/blog"
                  initialColor={context.primaryTextColor}
                  hoverColor={context.primaryAccentColor}
                >
                  Blog
                </Link_>
              </NavbarItem>
              <NavbarItem>
                <Link_
                  href="/about"
                  initialColor={context.primaryTextColor}
                  hoverColor={context.primaryAccentColor}
                >
                  About
                </Link_>
              </NavbarItem>
              <NavbarItem>
                <Link href="/contact">
                  <FlatButton theme={context} href="/">
                    Say hello
                  </FlatButton>
                </Link>
              </NavbarItem>
            </DisappearOnMobile>
            <NavbarItem>
              <ReactOutlineManager toggle={true}>
                {/* <DarkModeToggle
                  onChange={changeTheme}
                  checked={isDarkMode}
                  size={"6rem"}
                /> */}
              </ReactOutlineManager>
            </NavbarItem>
          </LinkInnerDivStyled>
        </LinkDivStyled>
      </NavbarStyled>
    </PageSectionContainer>
  );
}

const DisappearOnMobile = styled.div`
  display: inherit;
  @media (max-width: 991px) {
    display: none;
  }
`;

const NavbarStyled = styled.nav`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 992px) {
    padding-top: 3rem;
  }
`;

const LogoDivStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  color: ${(props) => props.theme.primaryAccentColor};
  font-size: 1.8rem;
  margin: 0px;
  font-weight: bold;
  @media (max-width: 950px) {
    width: 50%;
  }
`;

const LinkDivStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 75%;
  color: ${(props) => props.theme.primaryTextColor};
  @media (max-width: 950px) {
    width: 50%;
  }
`;

const LinkInnerDivStyled = styled.div`
  display: flex;
  align-items: center;
`;
