export default function LI(props: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li className="list-disc pt-2" {...props}>
      {props.children}
    </li>
  );
}
