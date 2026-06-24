import { ThemeContext } from "../theme/Theme";
import styled from "styled-components";
import { useContext } from "react";
import Link from "next/link";

export default function ProjectCard(props) {
  const { href } = props;
  const context = useContext(ThemeContext);
  return (
    <ProjectCardStyled>
      <ProjectCardImageWrapper>
        <Link href={href}>
          <NewProjectCardOverlay />
          <img src={props.src} className="rounded-lg" />
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

const NewProjectCardOverlay = () => {
  return (
    <div className="w-full h-full absolute rounded-lg hover:opacity-20 bg-white opacity-0 ease duration-500" />
  );
};

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
