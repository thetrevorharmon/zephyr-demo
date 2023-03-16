import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { LEXER_CODE, PARSER_CODE } from "../language";
import { zephyr } from "../extensions";
import { Code, Link, TokenTable } from "../components";

import CodeEditor from "@uiw/react-codemirror";

const IndexPage: React.FC<PageProps> = () => {
  const [value, setValue] = React.useState(
    "const value = 42;\nlet test = 'hi';\n\n\n"
  );

  return (
    <main className="m-10 mx-auto max-w-5xl text-slate-700 font-serif">
      <h1 className="mt-64 mb-3 text-8xl font-display font-extrabold text-blue-900 lowercase">
        Zephyr
      </h1>
      <h2 className="mb-20 text-lg leading-5 text-slate-400">
        CodeMirror 6 meets ANTLR
      </h2>

      <div className="space-y-6 mb-24 max-w-3xl text-lg">
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
          parser system. The writer of Lezer has added support to many common
          languages. However, in cases where you need to use a different parser
          system (such as one that you've already written), how do you connect
          that to CodeMirror 6?
        </p>
        <p>
          This demo shows how to do just that–
          <Link href="https://github.com/thetrevorharmon/zephyr-lang">
            view the source on GitHub
          </Link>{" "}
          to see how it works.
        </p>
        <p className="pt-20">
          Wondering why it's called Zephyr? I asked ChatGPT to make up a name
          and it said:
          <blockquote className="text-slate-400 border-slate-200 mt-3 pl-4 border-l-8">
            How about "Zephyr"? It suggests a fresh, light, and airy language
            that can help developers build software quickly and easily. It also
            sounds distinct and memorable, which can help it stand out in a
            crowded programming language landscape.
          </blockquote>
        </p>
      </div>

      <h2 className="mt-24 mb-5 text-5xl font-display font-extrabold text-blue-900 lowercase">
        Editor
      </h2>
      <div style={{ border: "1px solid #ccc", marginBottom: 32 }}>
        <CodeEditor
          value={value}
          extensions={[zephyr]}
          onChange={(value) => setValue(value)}
          indentWithTab={false}
        />
      </div>

      <div className="max-h-80 overflow-y-auto rounded-md mb-32 border border-slate-400">
        <TokenTable document={value} />
      </div>

      <h3 className="mt-24 mb-3 text-5xl font-display font-extrabold text-blue-900 lowercase">
        Lexer
      </h3>
      <Code>{LEXER_CODE}</Code>
      <h3 className="mt-24 mb-3 text-5xl font-display font-extrabold text-blue-900 lowercase">
        Parser
      </h3>
      <Code>{PARSER_CODE}</Code>
      <div className="mb-32">&nbsp;</div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
