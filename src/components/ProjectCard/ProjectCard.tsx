import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme/Theme";
import Link from "next/link";

export default function ProjectCard(props) {
  const { href } = props;
  const context = useContext(ThemeContext);
  return (
    <ProjectCardStyled>
      <ProjectCardImageWrapper>
        <Link href={href}>
          <ProjectCardOverlay />
          <ProjectCardImg src={props.src} />
        </Link>
      </ProjectCardImageWrapper>
      <Link href={href}>
        <ProjectCardTitleTextStyled theme={context}>
          {props.title}
        </ProjectCardTitleTextStyled>
      </Link>
      <Link href={href}>
        <ProjectCardTagTextStyled theme={context}>
          {props.tags}
        </ProjectCardTagTextStyled>
      </Link>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.div``;

const ProjectCardImageWrapper = styled.div`
  position: relative;
`;

const ProjectCardOverlay = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: white;
  :hover {
    opacity: 0.2;
  }
`;

const ProjectCardImg = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  border-radius: 10px;
  display: block;

  @media (min-width: 576px) {
    height: 30rem;
  }
`;

const ProjectCardTitleTextStyled = styled.div`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 1.6rem;
  margin-top: 0.6rem;
  margin-bottom: 0px;
  display: block;
  width: 100%;
`;

const ProjectCardTagTextStyled = styled.div`
  color: ${(props) => props.theme.secondaryTextColor};
  font-size: 1.6rem;
  margin-top: 0.6rem;
  display: block;
  margin-bottom: 0.6rem;
`;
