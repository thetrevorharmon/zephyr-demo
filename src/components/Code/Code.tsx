import React, { ReactNode } from "react";
import { highlightAll, languages } from "prismjs";

export function Code({ children }: { children: ReactNode }) {
  React.useEffect(() => {
    highlightAll();
  }, []);

  return (
    <pre className="bg-slate-100 px-5 py-5">
      <code className="language-g4">{children}</code>
    </pre>
  );
}
