import PageSectionContainer from "../PageSectionContainer/PageSectionContainer";
import Link_ from "../LinkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import { PropsWithChildren } from "react";

export default function Footer() {
  return (
    <PageSectionContainer>
      <div className="flex lg:hidden flex-col items-center gap-y-4 text-primary text-base border-t border-secondary pt-8">
        <div>
          Made with&nbsp;
          <Link_
            href="https://nextjs.org/"
            initialAccent={true}
            target="_blank"
          >
            Next.js
          </Link_>
          , hosted on&nbsp;
          <Link_
            href="https://vercel.com/"
            target="_blank"
            initialAccent={true}
          >
            Vercel
          </Link_>
        </div>
        <div>
          MIT License © 2021–present{" "}
          <Link_ href="/" initialAccent={true}>
            Neil Hanak
          </Link_>
        </div>
        <div>Made with ❤️ in Canada</div>
      </div>
      <div className="justify-between mt-[10px] border-t border-secondary pt-[50px] mb-[25px] hidden lg:flex">
        <FooterColumn>
          <div>
            Made with&nbsp;
            <Link_
              href="https://nextjs.org/"
              initialAccent={true}
              target="_blank"
            >
              Next.js
            </Link_>
            , hosted on&nbsp;
            <Link_
              href="https://vercel.com/"
              target="_blank"
              initialAccent={true}
            >
              Vercel
            </Link_>
          </div>
          <div>
            MIT License © 2021–present{" "}
            <Link_ href="/" initialAccent={true}>
              Neil Hanak
            </Link_>
          </div>
          <div>Made with ❤️ in Canada</div>
        </FooterColumn>
        <FooterColumn className="text-right">
          <Link_ href="/projects">Projects</Link_>
          <div>
            <Link_ href="/blog">Blog</Link_>
          </div>
          <div>
            <Link_ href="/about">About</Link_>
          </div>
        </FooterColumn>
      </div>
    </PageSectionContainer>
  );
}

const FooterColumn = (props: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={`flex flex-col gap-y-[20px] text-primary text-base ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
};
