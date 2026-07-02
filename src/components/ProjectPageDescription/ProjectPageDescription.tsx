import { PropsWithChildren } from "react";

export default function ProjectPageDescription(props: PropsWithChildren) {
  return (
    <div className="mt-12 flex flex-col gap-y-7 md:gap-y-10 md:pl-12">
      {props.children}
    </div>
  );
}
