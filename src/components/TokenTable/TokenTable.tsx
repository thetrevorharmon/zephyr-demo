import { Token } from "antlr4ts";
import React from "react";
import { Zephyr } from "../../language";
import { getUniqueId } from "../../utilities";

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
            {Object.entries(row).map(([key, value]) => (
              <td
                key={getUniqueId(String(value))}
                className="px-2 py-1.5 border first:border-l-0 border-r-0 border-b-0 border-slate-400 text-left font-mono"
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
