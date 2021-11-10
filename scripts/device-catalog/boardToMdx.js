/*
    This function is used to generate the per-board docusaurus pages in markdown.
*/

function boardToMdx(board) {
    return `\
---
id: ${board.boardId}
title: ${board.name}
slug: /hardware/catalog/boards/${board.arch}/${board.boardId}
---

[//]: # (This is an auto-generated file, do not edit! Changes to it will be lost upon re-generation)

${board.img !== null ? `![${board.name}!](/img/boards/${board.arch}/${board.img} "${board.name}")` : ''}

|                | Board properties     |
| -------------  | -------------------- |
| Board ID       | \`${board.boardId}\` |
| Golioth Level  | ${board.level}       |
${board.level === 'quickstart' ? `| Golioth Quickstart | [${board.boardId} quickstart](${board.quickstart}) |` : ''}
| Architecture   | ${board.arch.toUpperCase()} |
| RAM*           | ${board.ram === null ? 'N/A' : `${board.ram} kB`} |
| Flash*         | ${board.flash === null ? 'N/A' : `${board.flash} kB`} |

\\* values are as reported by Zephyr \`.yaml\` board files, which don't represent the overall available resources

${ board.level === 'quickstart' ? `\
## Getting started

See our [quickstart quide for ${board.name}](${board.quickstart}).
` : ''}

## Supported features

${board.supported.map((sup) => `* ${sup}`).join('\n') || 'List of supported features is not available.'}

## Supported toolchains

${board.toolchain.map((tc) => `* ${tc}`).join('\n') || 'List of supported toolchains is not available.'}

## Official Zephyr docs

[${board.name} (${board.boardId})](https://docs.zephyrproject.org/latest/boards/${board.arch}/${board.boardId}/doc/index.html)
`;
}

module.exports = boardToMdx;