export default function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      {...props}
      className="text-text-primary sm:text-7xl md:text-5xl font-bold"
    >
      {props.children}
    </h1>
  );
}
