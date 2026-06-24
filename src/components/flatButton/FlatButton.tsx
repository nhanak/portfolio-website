import { PropsWithChildren } from "react";

const FlatButton = (props: PropsWithChildren) => {
  return (
    <div className="border border-accent text-accent px-8 py-2 rounded-full hover:bg-accent hover:text-canvas trasition-colors duration-200 ease">
      {props.children}
    </div>
  );
  //   return (
  //     <FlatButtonStyled
  //       href={props.href}
  //       onClick={props.onClick}
  //       ref={ref}
  //       theme={context}
  //     >
  //       {props.children}
  //     </FlatButtonStyled>
  //   );
};

//FlatButton.displayName = "FlatButton";

// const FlatButtonStyled = styled.a`
//   border: 1px solid ${(props) => props.theme.primaryAccentColor};
//   border-radius: 1.8rem;
//   color: ${(props) => props.theme.primaryAccentColor};
//   background-color: rgba(0, 0, 0, 0);
//   font-size: 1.6rem;
//   padding-left: 3.5rem;
//   padding-right: 3.5rem;
//   padding-top: 0.75rem;
//   padding-bottom: 0.75rem;
//   transition: background-color 0.2s ease;
//   cursor: pointer;
//   :hover {
//     color: ${(props) => props.theme.primaryBackgroundColor};
//     background-color: ${(props) => props.theme.primaryAccentColor};
//   }
// `;

export default FlatButton;
