import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ZephyrLexer } from "./build/ZephyrLexer";

export enum Token {
  Const = "const",
  Let = "let",
  Semicolon = "semicolon",
  Assign = "assign",
  Number = "number",
  String = "string",
  Identifier = "identifier",
  Unknown = "unknown",
}

export class Zephyr {
  private lexerTokenToTokenLookup: { [key: number]: Token } = {
    [ZephyrLexer.CONST]: Token.Const,
    [ZephyrLexer.LET]: Token.Let,
    [ZephyrLexer.SEMICOLON]: Token.Semicolon,
    [ZephyrLexer.ASSIGN]: Token.Assign,
    [ZephyrLexer.NUMBER]: Token.Number,
    [ZephyrLexer.STRING]: Token.String,
    [ZephyrLexer.IDENTIFIER]: Token.Identifier,
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

    return Token.Unknown;
  }
}
