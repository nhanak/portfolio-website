import H3 from "../h3/H3";

export default function BlogSubSectionTitle(
  props: React.ComponentPropsWithoutRef<"h3">,
) {
  return <H3 {...props} className="text-center py-10" />;
}
