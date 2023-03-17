// Generated from grammar/ZephyrLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ZephyrLexer extends Lexer {
	public static readonly CONST = 1;
	public static readonly LET = 2;
	public static readonly ASSIGN = 3;
	public static readonly SEMICOLON = 4;
	public static readonly COMMENT = 5;
	public static readonly NUMBER = 6;
	public static readonly STRING = 7;
	public static readonly IDENTIFIER = 8;
	public static readonly WHITESPACE = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"CONST", "LET", "ASSIGN", "SEMICOLON", "COMMENT", "NUMBER", "STRING", 
		"IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'const'", "'let'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONST", "LET", "ASSIGN", "SEMICOLON", "COMMENT", "NUMBER", 
		"STRING", "IDENTIFIER", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ZephyrLexer._LITERAL_NAMES, ZephyrLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ZephyrLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ZephyrLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ZephyrLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ZephyrLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ZephyrLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ZephyrLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ZephyrLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vK\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06(\n\x06\f\x06\x0E\x06" +
		"+\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x06\x073\n\x07" +
		"\r\x07\x0E\x074\x03\b\x03\b\x07\b9\n\b\f\b\x0E\b<\v\b\x03\b\x03\b\x03" +
		"\t\x06\tA\n\t\r\t\x0E\tB\x03\n\x06\nF\n\n\r\n\x0E\nG\x03\n\x03\n\x04)" +
		":\x02\x02\v\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r" +
		"\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x03\x02\x05\x03\x022;\x04\x02C\\" +
		"c|\x05\x02\v\f\x0E\x0F\"\"\x02O\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x1B\x03\x02\x02" +
		"\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\v#\x03\x02\x02\x02\r2" +
		"\x03\x02\x02\x02\x0F6\x03\x02\x02\x02\x11@\x03\x02\x02\x02\x13E\x03\x02" +
		"\x02\x02\x15\x16\x07e\x02\x02\x16\x17\x07q\x02\x02\x17\x18\x07p\x02\x02" +
		"\x18\x19\x07u\x02\x02\x19\x1A\x07v\x02\x02\x1A\x04\x03\x02\x02\x02\x1B" +
		"\x1C\x07n\x02\x02\x1C\x1D\x07g\x02\x02\x1D\x1E\x07v\x02\x02\x1E\x06\x03" +
		"\x02\x02\x02\x1F \x07?\x02\x02 \b\x03\x02\x02\x02!\"\x07=\x02\x02\"\n" +
		"\x03\x02\x02\x02#$\x071\x02\x02$%\x07,\x02\x02%)\x03\x02\x02\x02&(\v\x02" +
		"\x02\x02\'&\x03\x02\x02\x02(+\x03\x02\x02\x02)*\x03\x02\x02\x02)\'\x03" +
		"\x02\x02\x02*,\x03\x02\x02\x02+)\x03\x02\x02\x02,-\x07,\x02\x02-.\x07" +
		"1\x02\x02./\x03\x02\x02\x02/0\b\x06\x02\x020\f\x03\x02\x02\x0213\t\x02" +
		"\x02\x0221\x03\x02\x02\x0234\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02" +
		"\x02\x025\x0E\x03\x02\x02\x026:\x07)\x02\x0279\v\x02\x02\x0287\x03\x02" +
		"\x02\x029<\x03\x02\x02\x02:;\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x03\x02" +
		"\x02\x02<:\x03\x02\x02\x02=>\x07)\x02\x02>\x10\x03\x02\x02\x02?A\t\x03" +
		"\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02" +
		"\x02\x02C\x12\x03\x02\x02\x02DF\t\x04\x02\x02ED\x03\x02\x02\x02FG\x03" +
		"\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\b" +
		"\n\x03\x02J\x14\x03\x02\x02\x02\b\x02)4:BG\x04\x02\x03\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZephyrLexer.__ATN) {
			ZephyrLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ZephyrLexer._serializedATN));
		}

		return ZephyrLexer.__ATN;
	}

}

