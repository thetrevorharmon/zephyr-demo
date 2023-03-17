parser grammar ZephyrParser;

program : statement* ;

statement : keyword identifier assign expression terminator ;

expression : NUMBER | IDENTIFIER | STRING;

keyword: CONST | LET ;

identifier: IDENTIFIER;
assign: ASSIGN;
terminator: SEMICOLON;
