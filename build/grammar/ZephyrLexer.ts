// Generated from grammar/Zephyr.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class ZephyrLexer extends Lexer {
	public static readonly KEYWORD = 1;
	public static readonly IDENTIFIER = 2;
	public static readonly NUMBER = 3;
	public static readonly STRING = 4;
	public static readonly TERMINATOR = 5;
	public static readonly ASSIGN = 6;
	public static readonly SINGLE_QUOTE = 7;
	public static readonly WHITESPACE = 8;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, null, null, null, 
                                                   null, "';'", "'='", "'''" ];
	public static readonly symbolicNames: string[] = [ null, "KEYWORD", "IDENTIFIER", 
                                                    "NUMBER", "STRING", 
                                                    "TERMINATOR", "ASSIGN", 
                                                    "SINGLE_QUOTE", "WHITESPACE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"KEYWORD", "IDENTIFIER", "NUMBER", "STRING", "TERMINATOR", "ASSIGN", "SINGLE_QUOTE", 
		"WHITESPACE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ZephyrLexer._ATN, ZephyrLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Zephyr.g4"; }

	public get literalNames(): (string | null)[] { return ZephyrLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ZephyrLexer.symbolicNames; }
	public get ruleNames(): string[] { return ZephyrLexer.ruleNames; }

	public get serializedATN(): number[] { return ZephyrLexer._serializedATN; }

	public get channelNames(): string[] { return ZephyrLexer.channelNames; }

	public get modeNames(): string[] { return ZephyrLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,8,59,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,
	0,1,0,1,0,1,0,1,0,3,0,26,8,0,1,1,4,1,29,8,1,11,1,12,1,30,1,2,4,2,34,8,2,
	11,2,12,2,35,1,3,1,3,5,3,40,8,3,10,3,12,3,43,9,3,1,3,1,3,1,4,1,4,1,5,1,
	5,1,6,1,6,1,7,4,7,54,8,7,11,7,12,7,55,1,7,1,7,1,41,0,8,1,1,3,2,5,3,7,4,
	9,5,11,6,13,7,15,8,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,
	63,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
	0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,25,1,0,0,0,3,28,1,0,0,0,5,33,1,0,0,0,7,
	37,1,0,0,0,9,46,1,0,0,0,11,48,1,0,0,0,13,50,1,0,0,0,15,53,1,0,0,0,17,18,
	5,99,0,0,18,19,5,111,0,0,19,20,5,110,0,0,20,21,5,115,0,0,21,26,5,116,0,
	0,22,23,5,108,0,0,23,24,5,101,0,0,24,26,5,116,0,0,25,17,1,0,0,0,25,22,1,
	0,0,0,26,2,1,0,0,0,27,29,7,0,0,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,
	0,0,30,31,1,0,0,0,31,4,1,0,0,0,32,34,7,1,0,0,33,32,1,0,0,0,34,35,1,0,0,
	0,35,33,1,0,0,0,35,36,1,0,0,0,36,6,1,0,0,0,37,41,3,13,6,0,38,40,9,0,0,0,
	39,38,1,0,0,0,40,43,1,0,0,0,41,42,1,0,0,0,41,39,1,0,0,0,42,44,1,0,0,0,43,
	41,1,0,0,0,44,45,3,13,6,0,45,8,1,0,0,0,46,47,5,59,0,0,47,10,1,0,0,0,48,
	49,5,61,0,0,49,12,1,0,0,0,50,51,5,39,0,0,51,14,1,0,0,0,52,54,7,2,0,0,53,
	52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,
	6,7,0,0,58,16,1,0,0,0,6,0,25,30,35,41,55,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZephyrLexer.__ATN) {
			ZephyrLexer.__ATN = new ATNDeserializer().deserialize(ZephyrLexer._serializedATN);
		}

		return ZephyrLexer.__ATN;
	}


	static DecisionsToDFA = ZephyrLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}