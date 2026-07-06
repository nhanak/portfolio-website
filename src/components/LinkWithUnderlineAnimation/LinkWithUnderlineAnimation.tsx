import { PropsWithChildren } from "react";
import Link from "next/link";

export default function LinkWithUnderlineAnimation(
  props: PropsWithChildren & {
    href: string;
    target?: string;
    initialAccent?: boolean;
    className?: string;
    additionalOnClick?: () => void;
  },
) {
  return (
    <Link
      href={props.href}
      className={`${props.initialAccent ? "text-accent" : "text-primary"} hover:text-accent hover:bg-size-[100%_1px] bg-size-[0%_1px] bg-no-repeat bg-position-[0%_100%] bg-[linear-gradient(var(--accent-primary),var(--accent-primary))]  transitions duration-300 text-base ${props.className ?? ""}`}
      target={props.target}
      onClick={props.additionalOnClick}
    >
      {props.children}
    </Link>
  );
}
