export default function UL(props: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul className="pl-4 text-primary text-xl pb-2" {...props}>
      {props.children}
    </ul>
  );
}
