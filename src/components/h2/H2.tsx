export default function H2(props: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 {...props} className="text-primary text-4xl font-bold my-6">
      {props.children}
    </h2>
  );
}
