lexer grammar ZephyrLexer;

CONST : 'const' ;
LET : 'let' ;

ASSIGN: '=' ;
SEMICOLON: ';' ;

NUMBER : [0-9]+ ;
STRING: '\'' .*? '\'';
IDENTIFIER: [a-zA-Z]+ ;
WHITESPACE: [ \t\n\r\f]+ -> skip ;
