function boardToMdx(board) {
    return `\
---
id: ${board.boardId}
title: ${board.name}
slug: /catalog/${board.boardId}
---

[//]: # (This is an auto-generated file, do not edit! Changes to it will be lost upon re-generation)

![${board.name}!](/img/boards/${board.arch}/${board.img} "${board.name}")

## Board ID

\`${board.boardId}\`

## Supported features

${board.supported.map((sup) => `* ${sup}`).join('\n') || 'List of supported features is not available.'}

## Official Zephyr docs

[${board.name} (${board.boardId})](https://docs.zephyrproject.org/latest/boards/${board.arch}/${board.boardId}/doc/index.html)
`;
}

module.exports = boardToMdx;