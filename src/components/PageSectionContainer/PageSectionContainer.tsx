import { PropsWithChildren } from "react";

export default function PageSectionContainer(
  props: PropsWithChildren & {
    className?: string;
    borderBottomMobile?: boolean;
  },
) {
  return (
    <div
      className={`pb-2 sm:pb-8 mb-12 w-full ${props.borderBottomMobile ? "border-secondary lg:border-none border-solid border-b " : ""} ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
}
