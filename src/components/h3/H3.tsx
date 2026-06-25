export default function H3(props: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 {...props} className="text-primary text-3xl font-bold">
      {props.children}
    </h3>
  );
}
