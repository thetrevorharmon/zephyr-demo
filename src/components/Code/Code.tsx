import React, { ReactNode } from "react";
import { highlightAll, languages } from "prismjs";

import "./Code.css";

export function Code({ children }: { children: ReactNode }) {
  React.useEffect(() => {
    highlightAll();
  }, []);

  return (
    <pre className="px-6 py-6 rounded-md bg-slate-50 text-sm border border-slate-300">
      <code className="language-g4">{children}</code>
    </pre>
  );
}
