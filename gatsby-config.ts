import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Zephyr`,
    siteUrl: `https://zephyr-demo.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Source Code Pro:400", "Source Serif Pro:400", "Shrikhand:400"],
        display: "swap",
      },
    },
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.png",
      },
    },
  ],
};

export default config;
