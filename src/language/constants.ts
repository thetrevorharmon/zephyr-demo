export const LEXER_CODE = `lexer grammar ZephyrLexer;

CONST : 'const' ;
LET : 'let' ;

QUOTE : '\'' ;
EQUALS: '=' ;
SEMICOLON: ';' ;

NUMBER : [0-9]+ ;
STRING: QUOTE .*? QUOTE;
IDENTIFIER: [a-zA-Z]+ ;
WHITESPACE: [ \\t\\n\\r\\f]+ -> skip ;`;

export const PARSER_CODE = `parser grammar ZephyrParser;

program : statement* ;

statement : keyword identifier assign expression terminator ;

expression : NUMBER | IDENTIFIER | STRING;

keyword: CONST | LET ;

identifier: IDENTIFIER;
assign: EQUALS;
terminator: SEMICOLON;
`;
