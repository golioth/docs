/*
    This function is used to generate the per-board docusaurus pages in markdown.

    See https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter
    for frontmatter (the part at the start of the document)
*/

function boardToMdx(board) {
    const {arch, boardId, name, level, img, ram, flash, quickstart, toolchain, supported, customDocMD} = board;
    const levelStrings = {
        'continuously-verified': 'Continuously verified',
        'verified': 'Verified',
        'unverified': 'Unverified',
    };
    const levelLinks = {
        'continuously-verified': '/firmware/hardware#continuously-verified-boards',
        'verified': '/firmware/hardware#verified-boards',
        'unverified': '/firmware/hardware#unverified-boards',
    };

    return `\
---
id: ${arch}_${boardId}
title: ${name}
slug: /firmware/hardware/catalog/boards/${level}/${arch}_${boardId}
description: IoT board ${name}, compatible with Golioth at ${level} level.
image: /img/boards/${arch}/${img}
${level === 'unverified' ? 'sidebar_class_name: hide-item' : ''}
---

[//]: # (This is an auto-generated file, do not edit! Changes to it will be lost upon re-generation)

${img !== null ? `![${name}!](/img/boards/${arch}/${img} "${name}")` : ''}

|                | Board properties     |
| -------------  | -------------------- |
| Board ID       | \`${boardId}\` |
| Golioth Level  | [${levelStrings[level]}](${levelLinks[level]}) |
${level === 'continuously-verified' ? `| Golioth Quickstart | [${boardId} quickstart](${quickstart}) |` : ''}\
| Architecture   | ${arch.toUpperCase()} |
| RAM*           | ${ram === null ? 'N/A' : `${ram} kB`} |
| Flash*         | ${flash === null ? 'N/A' : `${flash} kB`} |

\\* values are as reported by Zephyr \`.yaml\` board files, which don't represent the overall available resources

${ level === 'continuously-verified' ? `\
## Getting started

See our [quickstart guide for ${name}](${quickstart}).
` : ''}

## Supported features

${supported.map((sup) => `* ${sup}`).join('\n') || 'List of supported features is not available.'}

## Supported toolchains

${toolchain.map((tc) => `* ${tc}`).join('\n') || 'List of supported toolchains is not available.'}

## Official Zephyr docs

${customDocMD === null ? `[${name} (${boardId})](https://docs.zephyrproject.org/latest/boards/${arch}/${boardId}/doc/index.html)` : `${customDocMD}`}
`;
}

module.exports = boardToMdx;
