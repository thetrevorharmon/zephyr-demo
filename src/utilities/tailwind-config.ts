import resolveConfig from "tailwindcss/resolveConfig";
const tailwindConfigFile = require("../../tailwind.config.js");

export const tailwindConfig = resolveConfig(tailwindConfigFile);
