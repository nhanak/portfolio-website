import { PropsWithChildren } from "react";

export default function ProjectSection(props: PropsWithChildren) {
  return (
    <div className="bg-canvas-secondary py-6 px-10 rounded-lg">
      {props.children}
    </div>
  );
}

// const ProjectSectionStyled = styled.div`
//     padding-top:3rem;
//     padding-bottom:3rem;
//     ${props=>props.hasSectionHeader && `padding-top:2rem;`}
//     @media (min-width: 768px) {
//         ${props=>props.paddingBottom && `padding-bottom:${props.paddingBottom};`}
//         ${props=>props.paddingTop && `padding-top:${props.paddingTop};`}
//     }
// `
