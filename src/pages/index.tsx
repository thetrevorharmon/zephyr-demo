import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        color: "#232129",
        padding: 96,
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
      }}
    >
      <h1
        style={{
          marginTop: 0,
          marginBottom: 64,
          maxWidth: 320,
        }}
      >
        🌬️ Zephyr
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
