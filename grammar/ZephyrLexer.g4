lexer grammar ZephyrLexer;

CONST : 'const' ;
LET : 'let' ;

QUOTE : '\'' ;
EQUALS: '=' ;
SEMICOLON: ';' ;

NUMBER : [0-9]+ ;
STRING: QUOTE .*? QUOTE;
IDENTIFIER: [a-zA-Z]+ ;
WHITESPACE: [ \t\n\r\f]+ -> skip ;
