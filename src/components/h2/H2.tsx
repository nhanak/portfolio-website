export default function H2(props: React.ComponentPropsWithoutRef<"h2">) {
    return (
      <h2
        {...props}
        className="text-text-primary text-4xl font-bold"
      >
        {props.children}
      </h2>
    );
  }
  