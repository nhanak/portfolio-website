export default function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      {...props}
      className="text-primary text-4xl md:text-5xl font-bold mt-2 mb-8"
    >
      {props.children}
    </h1>
  );
}
