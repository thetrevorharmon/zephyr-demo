import React, { ReactNode } from "react";
import { highlightAll, languages } from "prismjs";

import "./Code.css";

export function Code({ children }: { children: ReactNode }) {
  React.useEffect(() => {
    highlightAll();
  }, []);

  return (
    <pre className="px-6 py-6 rounded-md bg-white text-sm border border-slate-400">
      <code className="language-g4">{children}</code>
    </pre>
  );
}
