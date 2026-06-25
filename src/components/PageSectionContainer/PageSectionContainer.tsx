import { PropsWithChildren } from "react";

export default function PageSectionContainer(
  props: PropsWithChildren & { className?: string },
) {
  return (
    <div className={`pb-12 w-full ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
}
