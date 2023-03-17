import React from "react";
import { Zephyr, ZephyrToken } from "../../language";
import { getUniqueId } from "../../utilities";

const colorClassForToken: { [key in ZephyrToken]: string } = {
  const: "text-fuchsia-700",
  let: "text-fuchsia-700",
  semicolon: "",
  assign: "text-orange-700",
  blockComment: "text-slate-500",
  lineComment: "text-slate-500",
  number: "text-violet-700",
  string: "text-lime-600",
  identifier: "text-blue-600",
  unknown: "",
};

export function TokenTable({ document }: { document: string }) {
  const zephyrInstance = new Zephyr();
  const tokens = zephyrInstance.getTokenStream(document);

  const table = tokens.map((token) => {
    const { text, type, startIndex, stopIndex } = token;
    return {
      text,
      typeIndex: type,
      typeName: zephyrInstance.getTokenTypeForIndex(type),
      startIndex,
      stopIndex,
    };
  });

  const tableHeadings = Object.keys(table[0]);

  return (
    <table cellPadding={0} cellSpacing={0} className="w-full text-sm">
      <thead className="bg-slate-200">
        <tr>
          {tableHeadings.map((heading) => (
            <th
              key={getUniqueId(heading)}
              className="px-2 py-1.5 border first:border-l-0 border-r-0 border-t-0 border-slate-400 text-left font-sans"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.map((row) => (
          <tr
            key={getUniqueId(row.text ?? "")}
            className="even:bg-slate-100 odd:bg-white"
          >
            {Object.entries(row).map(([key, value]) => {
              const className =
                key === "text" ? colorClassForToken[row.typeName] : "";

              return (
                <td
                  key={getUniqueId(String(value))}
                  className={`px-2 py-1.5 border first:border-l-0 border-r-0 border-b-0 border-slate-400 text-left font-mono ${className}`}
                >
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
