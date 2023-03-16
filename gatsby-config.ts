import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `zephr-lang`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Source Code Pro:400",
          "Source Sans Pro:200,400,800",
          "Source Serif Pro:400",
          "Work Sans:400",
          "Shrikhand:400",
          `Barlow\:400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};

export default config;
