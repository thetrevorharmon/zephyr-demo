import { Parser, Tree, Input, PartialParse, TreeFragment } from "@lezer/common";
import { Zephyr } from "../language";

export class ParserAdapter extends Parser {
  private language = new Zephyr();

  createParse(
    input: Input,
    fragments: readonly TreeFragment[],
    ranges: readonly { from: number; to: number }[]
  ): PartialParse {
    return {
      stoppedAt: input.length,
      parsedPos: input.length,
      stopAt: (_) => {},
      advance: () => {
        return null;
      },
    };
  }
}
