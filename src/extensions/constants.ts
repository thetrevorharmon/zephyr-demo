import { NodeSet, NodeType } from "@lezer/common";
import { ZephyrToken } from "./types";

export const zephyrTokenToNodeType: { [key in ZephyrToken]: NodeType } = {
  topNode: NodeType.define({ id: 0, name: "topNode" }),
  const: NodeType.define({ id: 1, name: "const" }),
  let: NodeType.define({ id: 1, name: "let" }),
  semicolon: NodeType.define({ id: 1, name: "semicolon" }),
  assign: NodeType.define({ id: 1, name: "assign" }),
  number: NodeType.define({ id: 1, name: "number" }),
  string: NodeType.define({ id: 1, name: "string" }),
  identifier: NodeType.define({ id: 1, name: "identifier" }),
  unknown: NodeType.define({ id: 1, name: "unknown" }),
};

export const parserAdapterNodeSet = new NodeSet(
  Object.values(zephyrTokenToNodeType)
);
