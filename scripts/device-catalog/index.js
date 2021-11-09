const fs = require('fs');
const YAML = require('yaml');
const boardsToJsonFile = require('./boardsToJsonFile');
const boardToMdx = require('./boardToMdx');

const zephyrRoot = './vendor/zephyr';
const docsRoot = './docs/hardware/boards';
const imgRoot = './static/img/boards';
const boardsFile = './docs/hardware/assets/boards.json';

const verifications = JSON.parse(fs.readFileSync('./scripts/device-catalog/support.json'));

function mkdir(path) {
    if (fs.existsSync(path) === false) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function findBoardImage(arch, boardId) {
    let img = null;
    let suffix = null;

    for (const imageBase of [
        `${zephyrRoot}/boards/${arch}/${boardId}/doc/img/${boardId}`,
        `${zephyrRoot}/boards/${arch}/${boardId}/doc/${boardId}`
    ]) {
        if (fs.existsSync(`${imageBase}.png`)) {
            img = `${imageBase}.png`;
            suffix = 'png';
        } else if (fs.existsSync(`${imageBase}.jpg`)) {
            img = `${imageBase}.jpg`;
            suffix = 'jpg';
        } else if (fs.existsSync(`${imageBase}.jpeg`)) {
            img = `${imageBase}.jpeg`;
            suffix = 'jpg';
        }
    }

    return { img, suffix };
}

function copyBoardImageToBuild(arch, boardId, img, suffix) {
    if (img === null) return;

    mkdir(`${imgRoot}/${arch}`);

    if (fs.existsSync(`${imgRoot}/${arch}/${boardId}.${suffix}`) === false) {
        fs.copyFileSync(img, `${imgRoot}/${arch}/${boardId}.${suffix}`);
    }
}

function getBoardVerification(board) {
    const record = verifications[board.arch][board.boardId];
    if (record === undefined)  return 'unverified';
    return record.level || 'unverified';
}

function getBoardMetadata(arch, boardId, suffix) {
    const board = {
        boardId,
        name: boardId,
        img: suffix === null ? null : `${boardId}.${suffix}`,
        arch,
        flash: null,
        ram: null,
        toolchain: [],
        supported: [],
        level: 'unverified',
    };

    const yamlPath = `${zephyrRoot}/boards/${arch}/${boardId}/${boardId}.yaml`;
    if (fs.existsSync(yamlPath)) {
        const yaml = YAML.parse(fs.readFileSync(`${zephyrRoot}/boards/${arch}/${boardId}/${boardId}.yaml`, 'ascii'));

        board.name = yaml.name;
        board.arch = arch; // could be yaml.arch, but riscv has some arch mismatches
        board.flash = yaml.flash || null;
        board.ram = yaml.ram || null;
        board.toolchain = yaml.toolchain || [];
        board.supported = yaml.supported || [];
    }

    board.level = getBoardVerification(board);

    return board;
}

function buildBoard(board) {
    const boardPath = `${docsRoot}/${board.arch}`;
    mkdir(boardPath);
    fs.writeFileSync(`${boardPath}/${board.boardId}.md`, boardToMdx(board));
}

if (!fs.existsSync(zephyrRoot)) {
    console.error(
        'Please clone the Zephyr repository first by running ./get-zephyr-boards.sh \n' +
        'or run yarn run fetch-zephyr. You\'ll need bash for that.\n' +
        '(Windows users can use the git shell)\n'
    );
    process.exit(1);
}

mkdir(docsRoot);

const architectures = fs.readdirSync(`${zephyrRoot}/boards`);
const boards = [];
const unbuilt = [];

const count = {
    boards: 0,
    built: 0,
};

for (const arch of architectures) {

    // skip irrelevant directories from the Zephyr repo
    if (!fs.statSync(`${zephyrRoot}/boards/${arch}`).isDirectory()) continue;
    if (arch === 'common' || arch === 'shields') continue;

    mkdir(`${docsRoot}/${arch}`);

    const boardIds = fs.readdirSync(`${zephyrRoot}/boards/${arch}`);

    for (const boardId of boardIds) {
        if (boardId === 'index.rst') continue;

        count.boards++;

        const { img, suffix } = findBoardImage(arch, boardId);

        if (img === null) {
            unbuilt.push(`${arch}:${boardId}`);
        }

        const board = getBoardMetadata(arch, boardId, suffix);
        boards.push(board);
        copyBoardImageToBuild(arch, boardId, img, suffix);
        buildBoard(board);

        count.built++;
    }
}

boardsToJsonFile(boards, boardsFile);

fs.writeFileSync(`${docsRoot}/_category_.yml`,
`\
label: 'Board catalog'
position: 5 # float position is supported
collapsible: true # make the category collapsible
collapsed: true # keep the category open by default
`
);

console.log(`Built ${count.built} out of ${count.boards} available boards.`);

console.log('Built: ');
console.log(boards.map((b) => `${b.arch}:${b.boardId}`).join(' '));

console.log('\nUnbuilt: ');
console.log(unbuilt.join(' '));
