// Generated from grammar/Zephyr.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import ZephyrListener from "./ZephyrListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ZephyrParser extends Parser {
	public static readonly KEYWORD = 1;
	public static readonly IDENTIFIER = 2;
	public static readonly NUMBER = 3;
	public static readonly STRING = 4;
	public static readonly TERMINATOR = 5;
	public static readonly ASSIGN = 6;
	public static readonly SINGLE_QUOTE = 7;
	public static readonly WHITESPACE = 8;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, "';'", 
                                                            "'='", "'''" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "KEYWORD", 
                                                             "IDENTIFIER", 
                                                             "NUMBER", "STRING", 
                                                             "TERMINATOR", 
                                                             "ASSIGN", "SINGLE_QUOTE", 
                                                             "WHITESPACE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "expr",
	];
	public get grammarFileName(): string { return "Zephyr.g4"; }
	public get literalNames(): (string | null)[] { return ZephyrParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ZephyrParser.symbolicNames; }
	public get ruleNames(): string[] { return ZephyrParser.ruleNames; }
	public get serializedATN(): number[] { return ZephyrParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ZephyrParser._ATN, ZephyrParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ZephyrParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 6;
				this.statement();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ZephyrParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 12;
			this.match(ZephyrParser.KEYWORD);
			this.state = 13;
			this.match(ZephyrParser.IDENTIFIER);
			this.state = 14;
			this.match(ZephyrParser.ASSIGN);
			this.state = 15;
			this.expr();
			this.state = 16;
			this.match(ZephyrParser.TERMINATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ZephyrParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 28) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,8,21,2,0,7,0,2,1,
	7,1,2,2,7,2,1,0,5,0,8,8,0,10,0,12,0,11,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
	1,2,1,2,0,0,3,0,2,4,0,1,1,0,2,4,18,0,9,1,0,0,0,2,12,1,0,0,0,4,18,1,0,0,
	0,6,8,3,2,1,0,7,6,1,0,0,0,8,11,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,1,1,
	0,0,0,11,9,1,0,0,0,12,13,5,1,0,0,13,14,5,2,0,0,14,15,5,6,0,0,15,16,3,4,
	2,0,16,17,5,5,0,0,17,3,1,0,0,0,18,19,7,0,0,0,19,5,1,0,0,0,1,9];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZephyrParser.__ATN) {
			ZephyrParser.__ATN = new ATNDeserializer().deserialize(ZephyrParser._serializedATN);
		}

		return ZephyrParser.__ATN;
	}


	static DecisionsToDFA = ZephyrParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: ZephyrParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ZephyrParser.RULE_program;
	}
	public enterRule(listener: ZephyrListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: ZephyrListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: ZephyrParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KEYWORD(): TerminalNode {
		return this.getToken(ZephyrParser.KEYWORD, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ZephyrParser.IDENTIFIER, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ZephyrParser.ASSIGN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public TERMINATOR(): TerminalNode {
		return this.getToken(ZephyrParser.TERMINATOR, 0);
	}
    public get ruleIndex(): number {
    	return ZephyrParser.RULE_statement;
	}
	public enterRule(listener: ZephyrListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: ZephyrListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: ZephyrParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(ZephyrParser.NUMBER, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ZephyrParser.IDENTIFIER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(ZephyrParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return ZephyrParser.RULE_expr;
	}
	public enterRule(listener: ZephyrListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: ZephyrListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}
