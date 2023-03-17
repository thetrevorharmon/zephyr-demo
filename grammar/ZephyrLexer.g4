lexer grammar ZephyrLexer;

CONST : 'const' ;
LET : 'let' ;

ASSIGN: '=' ;
SEMICOLON: ';' ;

BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

NUMBER : [0-9]+ ;
STRING: '\'' .*? '\'';
IDENTIFIER: [a-zA-Z]+ ;
WHITESPACE: [ \t\n\r\f]+ -> skip ;
