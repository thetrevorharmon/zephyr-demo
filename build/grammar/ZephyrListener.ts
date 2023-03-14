// Generated from grammar/Zephyr.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./ZephyrParser";
import { StatementContext } from "./ZephyrParser";
import { ExprContext } from "./ZephyrParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ZephyrParser`.
 */
export default class ZephyrListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ZephyrParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ZephyrParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `ZephyrParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ZephyrParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `ZephyrParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ZephyrParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

