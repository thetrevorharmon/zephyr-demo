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
	public static readonly NUMBER = 5;
	public static readonly STRING = 6;
	public static readonly IDENTIFIER = 7;
	public static readonly WHITESPACE = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"CONST", "LET", "ASSIGN", "SEMICOLON", "NUMBER", "STRING", "IDENTIFIER", 
		"WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'const'", "'let'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONST", "LET", "ASSIGN", "SEMICOLON", "NUMBER", "STRING", 
		"IDENTIFIER", "WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n;\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x06\x06\x06#\n\x06\r\x06\x0E\x06$\x03\x07\x03\x07\x07\x07)\n\x07" +
		"\f\x07\x0E\x07,\v\x07\x03\x07\x03\x07\x03\b\x06\b1\n\b\r\b\x0E\b2\x03" +
		"\t\x06\t6\n\t\r\t\x0E\t7\x03\t\x03\t\x03*\x02\x02\n\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x03\x02" +
		"\x05\x03\x022;\x04\x02C\\c|\x05\x02\v\f\x0E\x0F\"\"\x02>\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x05\x19\x03\x02\x02" +
		"\x02\x07\x1D\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v\"\x03\x02\x02\x02" +
		"\r&\x03\x02\x02\x02\x0F0\x03\x02\x02\x02\x115\x03\x02\x02\x02\x13\x14" +
		"\x07e\x02\x02\x14\x15\x07q\x02\x02\x15\x16\x07p\x02\x02\x16\x17\x07u\x02" +
		"\x02\x17\x18\x07v\x02\x02\x18\x04\x03\x02\x02\x02\x19\x1A\x07n\x02\x02" +
		"\x1A\x1B\x07g\x02\x02\x1B\x1C\x07v\x02\x02\x1C\x06\x03\x02\x02\x02\x1D" +
		"\x1E\x07?\x02\x02\x1E\b\x03\x02\x02\x02\x1F \x07=\x02\x02 \n\x03\x02\x02" +
		"\x02!#\t\x02\x02\x02\"!\x03\x02\x02\x02#$\x03\x02\x02\x02$\"\x03\x02\x02" +
		"\x02$%\x03\x02\x02\x02%\f\x03\x02\x02\x02&*\x07)\x02\x02\')\v\x02\x02" +
		"\x02(\'\x03\x02\x02\x02),\x03\x02\x02\x02*+\x03\x02\x02\x02*(\x03\x02" +
		"\x02\x02+-\x03\x02\x02\x02,*\x03\x02\x02\x02-.\x07)\x02\x02.\x0E\x03\x02" +
		"\x02\x02/1\t\x03\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02" +
		"\x02\x0223\x03\x02\x02\x023\x10\x03\x02\x02\x0246\t\x04\x02\x0254\x03" +
		"\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x0289\x03" +
		"\x02\x02\x029:\b\t\x02\x02:\x12\x03\x02\x02\x02\x07\x02$*27\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZephyrLexer.__ATN) {
			ZephyrLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ZephyrLexer._serializedATN));
		}

		return ZephyrLexer.__ATN;
	}

}

