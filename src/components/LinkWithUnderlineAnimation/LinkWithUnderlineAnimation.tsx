import { PropsWithChildren } from "react";
import Link from "next/link";
// import styled from "styled-components";

// const LinkWithUnderlineAnimation = React.forwardRef((props, ref) => {

//     function onClickAndAdditionalOnClick(event){
//         props.onClick(event);
//         props.additionalOnClick();
//     }

//     return (
//         <LinkWithUnderlineAnimationStyled
//             href={props.href}
//             target={props.target ? props.target : ""}
//             onClick={props.additionalOnClick ? onClickAndAdditionalOnClick : props.onClick}
//             ref={ref}
//             fontSize={props.fontSize}
//             initialColor={props.initialColor}
//             hoverColor={props.hoverColor}
//             marginTop={props.marginTop}
//             marginBottom={props.marginBottom}>
//                 {props.children}
//             </LinkWithUnderlineAnimationStyled>
//     )
//   });

// LinkWithUnderlineAnimation.displayName = "LinkWithUnderlineAnimation";

// const LinkWithUnderlineAnimationStyled = styled.a`
//     margin:0px;
//     ${props=>props.marginTop && `margin-top:${props.marginTop};`}
//     ${props=>props.marginBottom && `margin-bottom:${props.marginBottom};`}
//     font-size:${props=>props.fontSize};
//     text-decoration: none;
//     background-image: linear-gradient(currentColor, currentColor);
//     background-position: 0% 100%;
//     background-repeat: no-repeat;
//     background-size: 0% 1px;
//     transition: background-size .3s;
//     color:${props=>props.initialColor};
//     :hover{
//         background-size: 100% 1px;
//         color:${props=>props.hoverColor};
//     }
// `

export default function LinkWithUnderlineAnimation(
  props: PropsWithChildren & {
    href: string;
    target?: string;
    initialAccent?: boolean;
    className?: string;
  },
) {
  return (
    <Link
      href={props.href}
      className={`${props.initialAccent ? "text-accent" : "text-primary"} hover:text-accent hover:bg-size-[100%_1px] bg-size-[0%_1px] bg-no-repeat bg-position-[0%_100%] bg-[linear-gradient(var(--accent-primary),var(--accent-primary))]  transitions duration-300 text-base ${props.className ?? ""}`}
      target={props.target}
    >
      {props.children}
    </Link>
  );
}
//export default LinkWithUnderlineAnimation;
