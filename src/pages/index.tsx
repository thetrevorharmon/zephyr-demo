import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ZephyrLexer } from "../language/ZephyrLexer";
import { ZephyrParser } from "../language/ZephyrParser";
import { CharStreams, CommonTokenStream } from "antlr4ts";

const IndexPage: React.FC<PageProps> = () => {
  const input = `const value = 42;
const test = 'hi';`;

  const [value, setValue] = React.useState(input);

  // Create the lexer and parser
  let chars = CharStreams.fromString(value);
  let lexer = new ZephyrLexer(chars);
  let tokenStream = new CommonTokenStream(lexer);
  tokenStream.fill();

  const tokens = tokenStream.getTokens();

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
        style={{ width: "100%", minHeight: "100px" }}
        onChange={(event) => setValue(event.target.value)}
      >
        {value}
      </textarea>

      <p>
        <table
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderWidth: "1px 1px 0 0",
          }}
          cellPadding={0}
          cellSpacing={0}
        >
          <thead style={{ marginBottom: "1rem", background: "#eee" }}>
            {tableHeadings.map((heading) => (
              <td style={cellStyle}>{heading}</td>
            ))}
          </thead>
          <tbody>
            {table.map((row) => (
              <tr>
                {Object.values(row).map((value) => (
                  <td style={cellStyle}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
