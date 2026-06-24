"use client";

import PageSectionContainer from "../pageSectionContainer/PageSectionContainer";
import Link_ from "../linkWithUnderlineAnimation/LinkWithUnderlineAnimation";
//import ReactOutlineManager from "react-outline-manager";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import FlatButton from "../flatButton/FlatButton";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

//import DarkModeToggle from "react-dark-mode-toggle";

export default function Navbar(props) {
  const { isDarkMode } = props;

  function changeTheme() {
    props.toggleTheme();
  }

  return (
    <PageSectionContainer borderBottomMobile={true}>
      <div className="flex pb-3 pt-8 px-10 items-center">
        <Link_ href="/">Neil Hanak</Link_>
        <div className="flex justify-end grow-1 gap-x-20 items-center">
          <NavbarItem>
            <Link_ href="/projects">Projects</Link_>
          </NavbarItem>
          <NavbarItem>
            <Link_ href="/blog">Blog</Link_>
          </NavbarItem>
          <NavbarItem>
            <Link_ href="/about">About</Link_>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">
              <FlatButton href="/">Say hello</FlatButton>
            </Link>
          </NavbarItem>

          <DarkModeSwitch
            checked={false}
            onChange={() => {}}
            size={50}
            sunColor="#ffc800"
          />
          {/* <ReactOutlineManager toggle={true}>
                {/* <DarkModeToggle
                  onChange={changeTheme}
                  checked={isDarkMode}
                  size={"6rem"}
                /> }
              </ReactOutlineManager> */}
        </div>
      </div>
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
  @media (max-width: 950px) {
    width: 50%;
  }
`;

const LinkInnerDivStyled = styled.div`
  display: flex;
  align-items: center;
`;
