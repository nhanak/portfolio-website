import Link_ from "../linkWithUnderlineAnimation/LinkWithUnderlineAnimation";
import styled, { keyframes } from "styled-components";
import { enableBodyScroll } from "body-scroll-lock";
import { ThemeContext } from "../theme/Theme";
import React, { PropsWithChildren } from "react";
import Link from "next/link";

// The reason this is a class component instead of a functional component
// is so that we can get a ref and lock the body from NavButtonMobile
export default class NavbarMobile extends React.Component<{
  setMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileNavbarIsOpen: boolean;
}> {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      mobileNavbarHasOpened: false,
    };
  }

  handleExitClick = () => {
    const { setMobileNavbarOpen } = this.props;
    enableBodyScroll(this);
    setMobileNavbarOpen(false);
  };

  // I do not want the nav to "close" if it has never been opened in the first place
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.mobileNavbarIsOpen &&
      prevState.mobileNavbarHasOpened === false
    ) {
      this.setState({ mobileNavbarHasOpened: true });
    }
  }

  render() {
    const { mobileNavbarIsOpen, setMobileNavbarOpen } = this.props;
    console.log("mobileNavbarIsOpen", mobileNavbarIsOpen);
    const { mobileNavbarHasOpened } = { mobileNavbarHasOpened: false }; //this.state;
    return (
      <NewNavbarMobileWrapper
        mobileNavbarIsOpen={mobileNavbarIsOpen}
        mobileNavbarHasOpened={mobileNavbarHasOpened}
      >
        <NewNavbarMobileDarkener
          mobileNavbarIsOpen={mobileNavbarIsOpen}
          // onClick={this.handleExitClick}
        />
        <NewNavbarMobileContent>
          <Link_ href="/" additionalOnClick={this.handleExitClick}>
            Neil Hanak
          </Link_>

          <NavbarMobileLinkWrapper>
            <NewNavbarMobileItem>
              <Link_ href="/" additionalOnClick={this.handleExitClick}>
                Home
              </Link_>
            </NewNavbarMobileItem>
            <NewNavbarMobileItem>
              <Link_ href="/projects" additionalOnClick={this.handleExitClick}>
                Projects
              </Link_>
            </NewNavbarMobileItem>
            <NewNavbarMobileItem>
              <Link_ href="/blog" additionalOnClick={this.handleExitClick}>
                Blog
              </Link_>
            </NewNavbarMobileItem>
            <NewNavbarMobileItem>
              <Link_ href="/about" additionalOnClick={this.handleExitClick}>
                About
              </Link_>
            </NewNavbarMobileItem>
            <NewNavbarMobileItem>
              <Link_ href="/contact" additionalOnClick={this.handleExitClick}>
                Contact
              </Link_>
            </NewNavbarMobileItem>
          </NavbarMobileLinkWrapper>
        </NewNavbarMobileContent>
      </NewNavbarMobileWrapper>
    );
  }
}

const darken = keyframes`
    0%{
        background-color:rgba(0,0,0,0);
    }

    100%{
        background-color:rgba(0,0,0,0.5);
    }
`;

const lighten = keyframes`
    0%{
        background-color:rgba(0,0,0,0.5);
        
    }
    100%{
        background-color:rgba(0,0,0,0);
    }
`;

const dissapear = keyframes`
    0%{
        transform: translateX(0%) translateZ(0px);
    }
    99%{
        transform: translateX(0%) translateZ(0px);
    }
    100%{
        transform: translateX(100%) translateZ(0px);
    }
`;

const slideRight = keyframes`
  from {
    transform: translateX(0%) translateZ(0px);
  }
  to {
    transform: translateX(100%) translateZ(0px);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(100%) translateZ(0px);
  }
  to {
    transform: translateX(0%) translateZ(0px);
  }
`;

const NewNavbarMobileDarkener = (
  props: PropsWithChildren & { mobileNavbarIsOpen: boolean },
) => {
  return (
    <div
      className={`h-full w-[50%] opacity-50  ${props.mobileNavbarIsOpen ? "bg-black opacity-50" : "hidden"}`}
    >
      {props.children}
    </div>
  );
};

// const NavbarMobileDarkener = styled.div`
//   width: 50%;
//   height: 100%;
// `;

const NewNavbarMobileContent = (props: PropsWithChildren) => {
  return (
    <div className="w-full h-full pt-4 pb-3 bg-secondary ">
      {props.children}
    </div>
  );
};

// const NavbarMobileContent = styled.div`
//   padding-top: 4rem;
//   padding-left: 3rem;
//   width: 100%;
//   height: 100%;
//   background-color: ${(props) => props.theme.secondaryBackgroundColor};
//   animation: ${(props) =>
//     props.mobileNavbarIsOpen
//       ? css`
//           ${slideLeft} 0.5s ease
//         `
//       : css`
//           ${slideRight} 0.30s ease
//         `};
//   transform: ${(props) =>
//     props.mobileNavbarIsOpen
//       ? "translateX(0%) translateZ(0px)"
//       : "translateX(100%) translateZ(0px)"};

//   @media (min-width: 768px) {
//     padding-left: 4rem;
//   }
// `;

const NewNavbarMobileItem = (props: PropsWithChildren) => {
  return <div className="my-2">{props.children}</div>;
};

// const NavbarMobileItem = styled.div`
//   margin-bottom: 1rem;
//   margin-top: 1rem;
// `;

const NavbarMobileLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  height: 80%;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const NewNavbarMobileWrapper = (
  props: PropsWithChildren & {
    mobileNavbarIsOpen: boolean;
    mobileNavbarHasOpened: boolean;
  },
) => {
  return (
    <div
      className={`lg:hidden h-full w-screen fixed flex top-0 z-99 ${props.mobileNavbarIsOpen ? "" : "hidden"}`}
    >
      {props.children}
    </div>
  );
};

// const NavbarMobileWrapper = styled.div`
//   width: 100vw;
//   height: 100%;
//   position: fixed;
//   display: flex;
//   top: 0;
//   transform: ${(props) =>
//     props.mobileNavbarIsOpen
//       ? "translateX(0%) translateZ(0px)"
//       : "translateX(100%) translateZ(0px)"};
//   animation: ${(props) =>
//     props.mobileNavbarIsOpen
//       ? css`
//           ${darken} 0.5s ease, ${slideLeft} 0s
//         `
//       : props.mobileNavbarHasOpened
//         ? css`
//             ${lighten} 0.3s ease, ${dissapear} 0.3s
//           `
//         : ""};
//   background-color: ${(props) =>
//     props.mobileNavbarIsOpen ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"};
// `;
