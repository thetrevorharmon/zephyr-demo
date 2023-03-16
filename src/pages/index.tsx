import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LEXER_CODE, PARSER_CODE, Zephyr } from "../language";
import { zephyr } from "../extensions";
import { getUniqueId } from "../utilities";
import { Code } from "../components";

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
    <main className="m-10 mx-auto max-w-5xl">
      <h1
        style={{
          marginTop: 0,
          marginBottom: 64,
          maxWidth: 320,
        }}
        className="text-2xl font-extrabold"
      >
        🌬️ Zephyr
      </h1>

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

      <h2>Grammar</h2>
      <h3>Lexer</h3>
      <Code>{LEXER_CODE}</Code>
      <h3 style={{ marginTop: 32 }}>Parser</h3>
      <Code>{PARSER_CODE}</Code>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
