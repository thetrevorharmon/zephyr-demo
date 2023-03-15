import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LEXER_CODE, PARSER_CODE, Zephyr } from "../language";

let idCounter = 0;
function getUniqueId(id: string) {
  return `${id}-${idCounter++}`;
}

const IndexPage: React.FC<PageProps> = () => {
  const [value, setValue] = React.useState(
    "const value = 42;\nlet test = 'hi';"
  );

  const zephyr = new Zephyr();
  const tokens = zephyr.getTokens(value);

  const table = tokens.map((token) => {
    const {
      text,
      type,
      startIndex,
      stopIndex,
      tokenIndex,
      line,
      charPositionInLine,
    } = token;
    return {
      text,
      type,
      startIndex,
      stopIndex,
      tokenIndex,
      line,
      charPositionInLine,
    };
  });

  const tableHeadings = Object.keys(table[0]);

  const cellStyle = {
    padding: "0.25rem 0.5rem",
    border: "1px solid #ccc",
    borderWidth: "0 0 1px 1px",
  };

  return (
    <main
      style={{
        color: "#232129",
        padding: 96,
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
      }}
    >
      <h1
        style={{
          marginTop: 0,
          marginBottom: 64,
          maxWidth: 320,
        }}
      >
        🌬️ Zephyr
      </h1>

      <textarea
        style={{ width: "100%", minHeight: "100px", marginBottom: 32 }}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />

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
        <thead style={{ marginBottom: "1rem", background: "#eee" }}>
          <tr>
            {tableHeadings.map((heading) => (
              <th key={getUniqueId(heading)} style={cellStyle}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={getUniqueId(row.text ?? "")}>
              {Object.entries(row).map(([key, value]) => {
                const formattedValue =
                  key === "type" && typeof value === "number"
                    ? `${value} : ${zephyr.getTokenType(value)}`
                    : value;
                return (
                  <td key={getUniqueId(String(value))} style={cellStyle}>
                    {formattedValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Grammar</h2>
      <h3>Lexer</h3>
      <pre style={{ background: "#f8f8f8", padding: "1rem" }}>
        <code>{LEXER_CODE}</code>
      </pre>
      <h3 style={{ marginTop: 32 }}>Parser</h3>
      <pre style={{ background: "#f8f8f8", padding: "1rem" }}>
        <code>{PARSER_CODE}</code>
      </pre>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
