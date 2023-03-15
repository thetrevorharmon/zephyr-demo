import {
  Language,
  LanguageSupport,
  defineLanguageFacet,
} from "@codemirror/language";
import { ParserAdapter } from "./ParserAdapter";

const parserAdapter = new ParserAdapter();
const facet = defineLanguageFacet({});
const zephyrLanguage = new Language(facet, parserAdapter, [], "Zephyr");

export const zephyr = new LanguageSupport(zephyrLanguage);
