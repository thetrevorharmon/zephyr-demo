const supportedTokens = [
  "const",
  "let",
  "semicolon",
  "assign",
  "number",
  "string",
  "identifier",
  "unknown",
] as const;

export type Token = typeof supportedTokens[number];
