import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ZephyrLexer } from "../language/ZephyrLexer";
import { ZephyrParser } from "../language/ZephyrParser";
import { CharStreams, CommonTokenStream } from "antlr4ts";

const IndexPage: React.FC<PageProps> = () => {
  const input = "const value = 42;";

  // Create the lexer and parser
  let chars = CharStreams.fromString(input);
  let lexer = new ZephyrLexer(chars);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new ZephyrParser(tokenStream);

  // // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser;

  // console.log(input, chars, lexer, tokenStream, parser, tree);
  console.log(tokenStream.getTokens());

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
