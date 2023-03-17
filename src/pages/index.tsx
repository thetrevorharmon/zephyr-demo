import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LEXER_CODE, PARSER_CODE } from "../language";
import { Code, Link, TokenTable, Editor } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  const [value, setValue] = React.useState(
    "const value = 42;\nlet test = 'hi';\n\n\n"
  );

  return (
    <main className="container mx-auto px-5 max-w-5xl text-slate-700 font-serif">
      <h1 className="mt-32 md:mt-64 mb-3 text-6xl md:text-8xl font-display font-extrabold text-blue-900 lowercase">
        Zephyr
      </h1>
      <h2 className="mb-20 text-lg leading-5 text-slate-400">
        CodeMirror 6 meets ANTLR
      </h2>

      <div className="space-y-6 mb-24 max-w-3xl text-md md:text-lg">
        <p>👋 Hello there!</p>
        <p>
          Zephyr is a tiny language written in an{" "}
          <Link href="https://www.antlr.org/">ANTLR</Link> grammar with a very
          thin layer on top of what you get out of the box from ANTLR
          (basically, the bare minimum). The goal of this little language is to
          be used as an example for connecting{" "}
          <Link href="https://codemirror.net/">CodeMirror 6</Link> to an ANTLR
          style grammar.
        </p>
        <p>
          CodeMirror 6 was built around{" "}
          <Link href="https://lezer.codemirror.net/">Lezer</Link>, its own
          parser system. Lezer has support for common languages, and has a
          grammar syntax if you want to use Lezer. But, what if you've already
          written a grammar and parser, and don't want to rewrite it for
          CodeMirror 6 compatibility?
        </p>
        <p>
          This demo shows how to do just that–
          <Link href="https://github.com/thetrevorharmon/zephyr-lang">
            view the source on GitHub
          </Link>{" "}
          to see how it works.
        </p>
        <p className="pt-8 md:pt-20">
          Why “Zephyr”? I asked ChatGPT to make up a name for this little
          language and it said:
        </p>
        <blockquote className="text-slate-400 border-slate-200 pl-4 border-l-8">
          How about “Zephyr”? It suggests a fresh, light, and airy language that
          can help developers build software quickly and easily. It also sounds
          distinct and memorable, which can help it stand out in a crowded
          programming language landscape.
        </blockquote>
      </div>

      <h2 className="mt-24 mb-5 text-3xl md:text-5xl font-display font-extrabold text-blue-900 lowercase">
        Editor
      </h2>
      <div className="mb-24">
        <Editor value={value} setValue={(value) => setValue(value)} />
      </div>

      <div className="max-h-80 overflow-y-auto rounded-md mb-32 border border-slate-400">
        <TokenTable document={value} />
      </div>

      <h3 className="mt-24 mb-3 text-3xl md:text-5xl font-display font-extrabold text-blue-900 lowercase">
        Lexer
      </h3>
      <Code>{LEXER_CODE}</Code>
      <h3 className="mt-24 mb-3 text-3xl md:text-5xl font-display font-extrabold text-blue-900 lowercase">
        Parser
      </h3>
      <Code>{PARSER_CODE}</Code>
      <div className="mb-32">&nbsp;</div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
