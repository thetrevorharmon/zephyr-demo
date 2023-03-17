import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LEXER_CODE, PARSER_CODE } from "../language";
import { Code, Link, TokenTable, Editor, Header } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  const [value, setValue] = React.useState(`/*
  Welcome to Zephyr!

  This is a little toy language to show how to connect
  an ANTLR language server to CodeMirror 6.

  • It supports variable assignment & comments.
  • Semicolons are required at the end of statements.
  • Only numbers and strings can be assigned to variables.

  Here's a block comment!
*/
// It also supports line comments, if you prefer those.

// You can do variable assignments with \`const\`:
const myFirstVariable = 1000;

// And \`let\` works for variable assignments, too:
let anotherVariable = 'This is another variable!';

// That's it. Edit this code to try it out!`);

  return (
    <main className="container mx-auto px-5 max-w-3xl text-slate-700 font-serif space-y-32">
      <section className="mt-32 md:mt-64 space-y-3">
        <Header size="lg">Zephyr</Header>
        <p className="text-lg leading-5 text-slate-400">
          CodeMirror 6 meets ANTLR
        </p>
      </section>

      <section className="space-y-12 md:space-y-20 text-md md:text-lg">
        <div className="space-y-6">
          <p>👋 Hello there!</p>
          <p>
            Zephyr is a tiny language written in an{" "}
            <Link href="https://www.antlr.org/">ANTLR</Link> grammar with a very
            thin layer on top of what you get out of the box from ANTLR
            (basically, the bare minimum). The goal of this little language is
            to be used as an example for connecting{" "}
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
        </div>
        <div className="space-y-3">
          <p>
            Why “Zephyr”? I asked ChatGPT to make up a name for this little
            language and it said:
          </p>
          <blockquote className="text-slate-400 border-slate-200 pl-4 border-l-8">
            How about “Zephyr”? It suggests a fresh, light, and airy language
            that can help developers build software quickly and easily. It also
            sounds distinct and memorable, which can help it stand out in a
            crowded programming language landscape.
          </blockquote>
        </div>
      </section>

      <section className="space-y-16">
        <div className="space-y-5">
          <Header size="md">Editor</Header>

          <Editor value={value} setValue={(value) => setValue(value)} />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Header size="sm">Token Preview</Header>
            <p>
              This table includes a live preview of all of the tokens in the
              editor.
              <span>&nbsp;</span>
              <br className="hidden md:block" />
              Change the editor to see the tokens change!
            </p>
          </div>
          <div className="max-h-80 overflow-y-auto rounded-md mb-32 border border-slate-400">
            <TokenTable document={value} />
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-4">
          <Header size="md">Grammar</Header>
          <p>
            This is the ANTLR grammar for Zephyr–it's used to generate the
            langauge server.
          </p>
        </div>
        <div className="space-y-3">
          <Header size="sm">Lexer</Header>
          <Code>{LEXER_CODE}</Code>
        </div>
        <div className="space-y-3">
          <Header size="sm">Parser</Header>
          <Code>{PARSER_CODE}</Code>
        </div>
      </section>
      <div className="mb-32">&nbsp;</div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Zephyr</title>;
