import {
  HighlightStyle,
  syntaxHighlighting as syntaxHighlightingExtension,
} from "@codemirror/language";

import { tags } from "@lezer/highlight";

// const shopifyqlSyntaxHighlighting = HighlightStyle.define([
//   { tag: tags.keyword, class: tagStyles.Keyword },
//   { tag: TAGS.fieldArgument, class: tagStyles.FieldArgument },
//   { tag: TAGS.schemaArgument, class: tagStyles.SchemaArgument },
//   { tag: TAGS.argument, class: tagStyles.Argument },
//   { tag: TAGS.identifier, class: tagStyles.Identifier },
//   { tag: TAGS.operator, class: tagStyles.Operator },
//   { tag: TAGS.number, class: tagStyles.Number },
//   { tag: TAGS.connector, class: tagStyles.Connector },
//   { tag: TAGS.modifier, class: tagStyles.Modifier },
//   { tag: TAGS.comment, class: tagStyles.Comment },
//   { tag: TAGS.unknown, class: tagStyles.Unknown },
//   { tag: TAGS.string, class: tagStyles.String },
// ]);
