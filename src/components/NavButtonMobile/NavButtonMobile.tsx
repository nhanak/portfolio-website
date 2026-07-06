import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Squash as Hamburger } from "hamburger-react";
import { PropsWithChildren } from "react";

//https://github.com/luukdv/hamburger-react
export default function NavButtonMobile(props: {
  navRef: React.RefObject<any>;
  mobileNavbarIsOpen: boolean;
  setMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mobileNavbarIsOpen, setMobileNavbarOpen } = props;

  function toggleMobileNavBar(val) {
    const { navRef } = props;
    if (!mobileNavbarIsOpen) {
      disableBodyScroll(navRef.current);
    } else {
      enableBodyScroll(navRef.current);
    }
    setMobileNavbarOpen(val);
  }

  return (
    <HamburgerDivStyled>
      <Hamburger
        toggled={mobileNavbarIsOpen}
        toggle={toggleMobileNavBar}
        color="white"
        size={20}
      />
    </HamburgerDivStyled>
  );
}

const HamburgerDivStyled = (props: PropsWithChildren) => {
  return (
    <div className="rounded-full fixed bottom-0 right-0 m-4 border-solid border-white border bg-accent lg:hidden z-99">
      {props.children}
    </div>
  );
};
