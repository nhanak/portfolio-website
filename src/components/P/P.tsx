export default function P(props: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} className="text-text-primary text-xl">
      {props.children}
    </p>
  );
}

// const PStyled = styled.p`
//   color: ${(props) => props.theme.primaryTextColor};
//   font-size: 2rem;
//   line-height: 3.5rem;
//   ${(props) => props.paddingLeft && `padding-left:${props.paddingLeft}`};
// `;
