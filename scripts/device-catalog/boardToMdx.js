/*
    This function is used to generate the per-board docusaurus pages in markdown.
*/

function boardToMdx(board) {
    return `\
---
id: ${board.boardId}
title: ${board.name}
slug: /catalog/boards/${board.arch}/${board.boardId}
---

[//]: # (This is an auto-generated file, do not edit! Changes to it will be lost upon re-generation)

${board.img !== null ? `![${board.name}!](/img/boards/${board.arch}/${board.img} "${board.name}")` : ''}

|               | Board properties     |
| ------------- | -------------------- |
| Board ID      | \`${board.boardId}\` |
| Golioth Level | ${board.level}       |
| Architecture  | ${board.arch.toUpperCase()} |
| RAM           | ${board.ram === null ? 'N/A' : `${board.ram} kB`} |
| Flash         | ${board.flash === null ? 'N/A' : `${board.flash} kB`} |

## Supported features

${board.supported.map((sup) => `* ${sup}`).join('\n') || 'List of supported features is not available.'}

## Supported toolchains

${board.toolchain.map((tc) => `* ${tc}`).join('\n') || 'List of supported toolchains is not available.'}

## Official Zephyr docs

[${board.name} (${board.boardId})](https://docs.zephyrproject.org/latest/boards/${board.arch}/${board.boardId}/doc/index.html)
`;
}

module.exports = boardToMdx;