import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LEXER_CODE, PARSER_CODE, Zephyr } from "../language";
import { zephyr } from "../extensions";
import { getUniqueId } from "../utilities";
import { Code, Link } from "../components";

import CodeEditor from "@uiw/react-codemirror";

const IndexPage: React.FC<PageProps> = () => {
  const [value, setValue] = React.useState(
    "const value = 42;\nlet test = 'hi';\n\n\n"
  );

  const zephyrInstance = new Zephyr();
  const tokens = zephyrInstance.getTokenStream(value);

  const table = tokens.map((token) => {
    const { text, type, startIndex, stopIndex } = token;
    return {
      text,
      typeIndex: type,
      typeName: zephyrInstance.getTokenTypeForIndex(type),
      startIndex,
      stopIndex,
    };
  });

  const tableHeadings = Object.keys(table[0]);

  const cellStyle = {
    padding: "0.25rem 0.5rem",
    border: "1px solid #ccc",
    borderWidth: "0 0 1px 1px",
  };

  return (
    <main className="m-10 mx-auto max-w-5xl text-slate-700">
      <h1 className="mt-64 mb-3 text-8xl font-display font-extrabold text-blue-900">
        zephyr
      </h1>
      <h2 className="font-sans mb-20 text-lg leading-5 text-slate-400">
        CodeMirror 6 meets ANTLR
      </h2>

      <div className="space-y-3 mb-24 max-w-2xl font-serif">
        <p>👋 Hello there!</p>
        <p>
          This is a small demo to show how to connect{" "}
          <Link href="https://codemirror.net/">CodeMirror 6</Link> to other
          language servers. CodeMirror 6 was built around{" "}
          <Link href="https://lezer.codemirror.net/">Lezer</Link>, its own
          parser system. However, in cases where you need to use a different
          parser system (such as one that already exists), how do you connect
          that to CodeMirror 6?
        </p>
        <p>
          This demo shows how to do that–view the source on GitHub to see how it
          works.
        </p>
      </div>

      <div style={{ border: "1px solid #ccc", marginBottom: 32 }}>
        <CodeEditor
          value={value}
          extensions={[zephyr]}
          onChange={(value) => setValue(value)}
          indentWithTab={false}
        />
      </div>

      <table
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderWidth: "1px 1px 0 0",
          marginBottom: 64,
        }}
        cellPadding={0}
        cellSpacing={0}
      >
        <thead style={{ marginBottom: "1rem" }} className="bg-gray-200">
          <tr>
            {tableHeadings.map((heading) => (
              <th
                key={getUniqueId(heading)}
                style={cellStyle}
                className="text-left"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={getUniqueId(row.text ?? "")} className="even:bg-gray-100">
              {Object.entries(row).map(([key, value]) => (
                <td
                  key={getUniqueId(String(value))}
                  style={cellStyle}
                  className="font-mono text-sm"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-24 mb-1 text-3xl font-display font-extrabold text-blue-900">
        grammar
      </h2>
      <h3>Lexer</h3>
      <Code>{LEXER_CODE}</Code>
      <h3 style={{ marginTop: 32 }}>Parser</h3>
      <Code>{PARSER_CODE}</Code>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
