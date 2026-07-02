export default function P(
  props: React.ComponentPropsWithoutRef<"p"> & { className?: string },
) {
  return (
    <p
      {...props}
      className={`text-primary text-xl leading-[2rem] mb-7 ${props.className ? props.className : ""}`}
    >
      {props.children}
    </p>
  );
}
