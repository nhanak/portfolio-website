import PageSectionContainer from "../pageSectionContainer/PageSectionContainer";
import Link_ from "../linkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import ThemeToggle from "../themeToggle/ThemeToggle";
import FlatButton from "../flatButton/FlatButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <PageSectionContainer borderBottomMobile={true}>
      <div className="flex pb-3 pt-4 lg:pt-8 px-10 items-center">
        <Link_ initialAccent={true} className="font-bold text-lg" href="/">
          Neil Hanak
        </Link_>
        <div className="flex justify-end grow-1 gap-x-19 items-center">
          <div className="hidden lg:flex justify-end grow-1 gap-x-19 items-center">
            <Link_ href="/projects">Projects</Link_>
            <Link_ href="/blog">Blog</Link_>
            <Link_ href="/about">About</Link_>
            <Link href="/contact">
              <FlatButton>Say hello</FlatButton>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </PageSectionContainer>
  );
}
