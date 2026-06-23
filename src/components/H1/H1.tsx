export default function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 {...props} className="text-text-primary text-6xl sm:text-7xl">
      {props.children}
    </h1>
  );
}
