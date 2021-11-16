/*
    This file is not in use.

    It was used as a demonstration of what can be generated,
    and might be useful in the future if we want to generate static HTML content
    directly from this repo.

*/

const fs = require('fs');

function boardToHtmlFile(board) {
    const toolchain = board.toolchain.map((tc) => `<img src="./img/${tc}.svg"> `);
    const supported = board.supported.map((sup) => `<span>${sup}</span>`);

    return `\
<div class="board">
    <div class="img">
        <img src="${board.img}" alt="${board.boardId}" title="${board.boardId}">
    </div>
    <div class="body">
        <h1><span class="gradient-green">${board.name}</span></h1>
        <table>
            <thead>
                <tr><th>Architecture</th><th>Flash</th><th>RAM</th></tr>
            </thead>
            <tbody>
                <tr><td>${board.arch.toUpperCase()}</td><td>${board.flash} kB</td><td>${board.ram} kB</td></tr>
            </tbody>
        </table>
        <div class="support">${supported.join('')}</div>
    </div>
    <div class="toolchain">${toolchain.join('')}</div>
</div>
`;
}


function boardsToHtml(boards, file) {
    const html = fs.createWriteStream(file);
    html.write(fs.readFileSync('./head.html'));

    for (board of boards) {
        html.write(boardToHtml(board));
    }

    html.write('</div></body></html>\n');
    html.close();
}

module.exports = boardsToHtml;