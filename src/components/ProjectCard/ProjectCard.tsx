import { ProjectCardProps } from "./types";
import Link from "next/link";

export default function ProjectCard(props: ProjectCardProps) {
  const { href } = props;

  return (
    <div>
      <div className="relative">
        <Link href={href}>
          <div className="w-full h-full absolute rounded-lg hover:opacity-20 bg-white opacity-0 ease duration-500" />
          <img src={props.src} className="rounded-lg w-full" />
        </Link>
      </div>
      <Link href={href}>
        <div className="text-primary pt-2">{props.title}</div>
      </Link>
      <Link href={href}>
        <div className="text-secondary">{props.tags}</div>
      </Link>
    </div>
  );
}
