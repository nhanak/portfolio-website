import { PropsWithChildren } from "react";

const ProjectCardsGrid = (props: PropsWithChildren) => {
  return (
    <div className="grid gap-[50px] grid-cols-1 lg:grid-cols-2">
      {props.children}
    </div>
  );
};

export default ProjectCardsGrid;
