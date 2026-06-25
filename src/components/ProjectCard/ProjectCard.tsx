import { PropsWithChildren } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function ProjectCard(props) {
  const { href } = props;

  return (
    <ProjectCardStyled>
      <ProjectCardImageWrapper>
        <Link href={href}>
          <NewProjectCardOverlay />
          <img src={props.src} className="rounded-lg" />
        </Link>
      </ProjectCardImageWrapper>
      <Link href={href}>
        <NewProjectCardTitleTextStyled>
          {props.title}
        </NewProjectCardTitleTextStyled>
      </Link>
      <Link href={href}>
        <NewProjectCardTagTextStyled>{props.tags}</NewProjectCardTagTextStyled>
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

const NewProjectCardTitleTextStyled = (props: PropsWithChildren) => {
  return <div className="text-primary pt-2">{props.children}</div>;
};

const NewProjectCardTagTextStyled = (props: PropsWithChildren) => {
  return <div className="text-secondary">{props.children}</div>;
};
