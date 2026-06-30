import H1 from "../h1/H1";
import P from "../p/P";

export default function PageTitleSection({
  title,
  description,
  titleMobile,
  descriptionMobile,
  centered = false,
}: {
  title: string;
  description?: string;
  titleMobile?: string;
  descriptionMobile?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`pl-10 mt-2 flex mb-10 text-primary w-full ${centered ? "text-center justify-items-center flex-col" : "justify-items-start"}`}
    >
      <div className="hidden lg:block">
        <H1>{title}</H1>
        <P>{description}</P>
      </div>
      <div className="block lg:hidden">
        <H1>{titleMobile ? titleMobile : title}</H1>
        <P>{descriptionMobile ? descriptionMobile : description}</P>
      </div>
    </div>
  );
}
