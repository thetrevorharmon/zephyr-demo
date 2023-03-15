import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ZephyrLexer } from "./build/ZephyrLexer";
import { Token } from "./types";

export class Zephyr {
  private lexerTokenToTokenLookup: { [key: number]: Token } = {
    [ZephyrLexer.CONST]: "const",
    [ZephyrLexer.LET]: "let",
    [ZephyrLexer.SEMICOLON]: "semicolon",
    [ZephyrLexer.ASSIGN]: "assign",
    [ZephyrLexer.NUMBER]: "number",
    [ZephyrLexer.STRING]: "string",
    [ZephyrLexer.IDENTIFIER]: "identifier",
  };

  constructor() {}

  public getTokens(value: string) {
    const chars = CharStreams.fromString(value);
    const lexer = new ZephyrLexer(chars);
    const tokenStream = new CommonTokenStream(lexer);

    tokenStream.fill();

    return tokenStream.getTokens();
  }

  public getTokenType(tokenIndex: number): Token {
    if (tokenIndex in this.lexerTokenToTokenLookup) {
      return this.lexerTokenToTokenLookup[tokenIndex];
    }

    return "unknown";
  }
}
