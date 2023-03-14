import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CharStream, CommonTokenStream } from "antlr4";
import ZephyrLexer from "../../build/grammar/ZephyrLexer";
import ZephyrParser from "../../build/grammar/ZephyrParser";

const IndexPage: React.FC<PageProps> = () => {
  const input = "const value = 42;";
  const chars = new CharStream(input);
  const lexer = new ZephyrLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new ZephyrParser(tokens);
  const tree = parser.getTokenStream();

  console.log(tree);

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
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
