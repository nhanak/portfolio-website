"use client";

import { CodeBlock, dracula } from "react-code-blocks";

export default function ClientCodeBlock({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  return (
    <div className="py-7">
      <CodeBlock highlight={highlight} theme={dracula} text={text} />
    </div>
  );
}
