/*
    This function is used to generate the per-board docusaurus pages in markdown.

    See https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter
    for frontmatter (the part at the start of the document)
*/

function boardToMdx(board) {
    const {arch, boardId, name, level, img, ram, flash, quickstart, toolchain, supported} = board;
    return `\
---
id: ${arch}_${boardId}
title: ${name}
slug: /hardware/catalog/boards/${level}/${arch}_${boardId}
${level === 'unverified' ? 'sidebar_class_name: hide-item' : ''}
---

[//]: # (This is an auto-generated file, do not edit! Changes to it will be lost upon re-generation)

${img !== null ? `![${name}!](/img/boards/${arch}/${img} "${name}")` : ''}

|                | Board properties     |
| -------------  | -------------------- |
| Board ID       | \`${boardId}\` |
| Golioth Level  | ${level}       |
${level === 'quickstart' ? `| Golioth Quickstart | [${boardId} quickstart](${quickstart}) |` : ''}\
| Architecture   | ${arch.toUpperCase()} |
| RAM*           | ${ram === null ? 'N/A' : `${ram} kB`} |
| Flash*         | ${flash === null ? 'N/A' : `${flash} kB`} |

\\* values are as reported by Zephyr \`.yaml\` board files, which don't represent the overall available resources

${ level === 'quickstart' ? `\
## Getting started

See our [quickstart quide for ${name}](${quickstart}).
` : ''}

## Supported features

${supported.map((sup) => `* ${sup}`).join('\n') || 'List of supported features is not available.'}

## Supported toolchains

${toolchain.map((tc) => `* ${tc}`).join('\n') || 'List of supported toolchains is not available.'}

## Official Zephyr docs

[${name} (${boardId})](https://docs.zephyrproject.org/latest/boards/${arch}/${boardId}/doc/index.html)
`;
}

module.exports = boardToMdx;