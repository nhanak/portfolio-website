export default function H3(
  props: React.ComponentPropsWithoutRef<"h3"> & { className?: string },
) {
  return (
    <h3
      {...props}
      className={`text-primary text-3xl font-bold ${props.className ?? ""}`}
    >
      {props.children}
    </h3>
  );
}
