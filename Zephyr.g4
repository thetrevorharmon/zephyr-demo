grammar Zephyr;

program : statement* ;

statement : KEYWORD IDENTIFIER ASSIGN expr TERMINATOR ;

expr : NUMBER | IDENTIFIER | STRING;

KEYWORD: 'const' | 'let' ;

IDENTIFIER : [a-zA-Z]+ ;

NUMBER : [0-9]+ ;

STRING : SINGLE_QUOTE .*? SINGLE_QUOTE ;

TERMINATOR : ';' ;
ASSIGN : '=' ;

SINGLE_QUOTE : '\'' ;

WHITESPACE : [ \t\n\r]+ -> skip ;
