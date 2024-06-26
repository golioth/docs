const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const boardsToJsonFile = require('./boardsToJsonFile');
const boardToMdx = require('./boardToMdx');

const zephyrRoot = './vendor/zephyr';
const boardsRoot = path.join(zephyrRoot, 'boards');
const docsRoot = './docs/firmware/hardware/6-catalog';
const imgRoot = './static/img/boards';
const customImages = './scripts/device-catalog/custom_images'
const boardsFile = './docs/firmware/hardware/assets/boards.json';

const verifications = JSON.parse(fs.readFileSync('./scripts/device-catalog/support.json'));

function mkdir(path) {
    if (fs.existsSync(path) === false) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function getCustomImage(boardId) {
    const customFiles = fs.readdirSync(customImages).filter(fn => fn.startsWith(boardId));
    let img = null;
    let suffix = null;

    for (const image of customFiles) {
        if (path.parse(image).name === boardId) {
            img = path.join(customImages, image);
            suffix = path.extname(image);
            break;
        }
    }

    return { img, suffix };
}

function findBoardImage(boardPath, boardId) {
    let sourceImg = null;
    let suffix = null;
    let docFile = 'index.rst'

    const fullPath = path.join(boardsRoot, boardPath);

    // Check if a custom image is available
    const customImg = getCustomImage(boardId);
    if (customImg.img) {
        sourceImg = customImg.img;
        suffix = customImg.suffix;
        return { sourceImg, suffix };
    }

    // Find image in Zephyr tree
    if (!(fs.existsSync(path.join(fullPath, 'doc', docFile)))) {
        if (fs.existsSync(path.join(fullPath, 'doc', `${boardId}.rst`))) {
            docFile = `${boardId}.rst`;
        } else {
            return { sourceImg, suffix };
        }
    }

    boardDoc = fs.readFileSync(path.join(fullPath, 'doc', docFile), 'utf8');

    for (const line of boardDoc.split('\n')) {
        if (line.startsWith('.. figure:: ')) {
            sourceImg = path.join(fullPath, 'doc', line.split('.. figure:: ')[1]);
            suffix = path.extname(sourceImg);
            break;
        } else if (line.startsWith('.. image:: ')) {
            sourceImg = path.join(fullPath, 'doc', line.split('.. image:: ')[1]);
            suffix = path.extname(sourceImg);
            break;
        }
    }

    return { sourceImg, suffix };
}

function copyBoardImageToBuild(boardId, img, suffix) {
    if (img === null) return;

    mkdir(`${imgRoot}`);

    fs.copyFileSync(img, `${imgRoot}/${boardId}${suffix}`);
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function createLevelRoot(level) {
    mkdir(`${docsRoot}/${level}`);

    var levelCategory;
    switch(level) {
        case 'continuously-verified':
            levelCategory = 'Continuously verified boards';
            break;
        case 'verified':
            levelCategory = 'Verified boards';
            break;
        default:
            levelCategory = `${capitalize(level)} boards`
    }

    fs.writeFileSync(
        `${docsRoot}/${level}/_category_.yml`,
        `\
        label: ${levelCategory}
        collapsible: true
        collapsed: false
        ${level === 'unverified' ? 'className: "hide-menu"' : ''}
        `
        );
}

function getBoardVerification(board) {
    const record = verifications?.[board.boardId];
    if (!record) return { level: 'unverified', quickstart: null, customDocMD: null };
    return {
        level: record.level || 'unverified',
        quickstart: record.quickstart || null,
        customDocMD: record.customDocMD || null,
    };
}

function parseBoardYml(boardYml) {
    let boards = [];
    let name = boardYml.name;
    let vendor = boardYml.vendor || null;
    let revision = null;

    if ('revision' in boardYml) {
        revision = boardYml.revision.default;
    }

    if ('socs' in boardYml) {
        if (boardYml.socs.length > 1) {
            for (soc of boardYml.socs) {
                boards.push({ 'id':`${name}_${soc.name}`, 'soc':soc.name, 'rev':revision, 'vendor':vendor });
            }
        } else {
            boards.push({ 'id':name, 'soc':boardYml.socs[0].name, 'rev':revision, 'vendor':vendor });
        }
    } else {
        boards.push({ 'id':name, 'socs':null, 'rev':revision, 'vendor':vendor });
    }

    return boards;
}

function getBoardInfo(boardPath) {
    const yaml = YAML.parse(fs.readFileSync(path.join(boardsRoot, boardPath,
        'board.yml'), 'utf8'))

    let boards = [];

    if ("boards" in yaml) {
        for (const boardYml of yaml.boards) {
            boards.push(...parseBoardYml(boardYml));
        }
        return boards
    }

    // Single variant boards (majority of boards)
    boards.push(...parseBoardYml(yaml.board));

    return boards
}

function getSpecificYaml(board) {
    const getFileIfExists = (yamlName) => {
      const yamlPath = path.join(boardsRoot, board.path, yamlName);
      if (fs.existsSync(yamlPath)) return yamlPath;
    }

    let yamlPath = getFileIfExists(`${board.boardId}.yaml`);
    if (yamlPath) { return yamlPath; }

    // Boards that have a default revision
    if (board.rev) {
        yamlPath = getFileIfExists(`${board.boardId}_${board.rev.replace(/\./g, '_')}.yaml`);
        if (yamlPath) { return yamlPath; }
    }

    // Try procpu for ESP32 Boards
    yamlPath = getFileIfExists(`${board.boardId}_procpu.yaml`);
    if (yamlPath) { return yamlPath; }

    // Try based on soc (and socs with rev)
    if (board.soc) {
        yamlPath = getFileIfExists(`${board.boardId}_${board.soc}.yaml`);
        if (yamlPath) { return yamlPath; }

        if (board.rev) {
            yamlPath = getFileIfExists(`${board.boardId}_${board.soc}_${board.rev.replace(/\./g, '_')}.yaml`);
            if (yamlPath) { return yamlPath; }
        }
    }

    return null;
}

function getBoardMetadata(boardPath, boardInfo, suffix) {
    const board = {
        path: boardPath,
        boardId: boardInfo.id,
        name: boardInfo.id,
        soc: boardInfo.soc,
        rev: boardInfo.rev,
        vendor: boardInfo.vendor,
        img: suffix === null ? null : `${boardInfo.id}${suffix}`,
        arch: 'unspecified',
        flash: null,
        ram: null,
        toolchain: [],
        supported: [],
        level: 'unverified',
    };

    let yamlPath = getSpecificYaml(board)

    if (fs.existsSync(yamlPath)) {
        const yaml = YAML.parse(fs.readFileSync(yamlPath, 'utf8'));

        board.name = yaml.name;
        board.flash = yaml.flash || null;
        board.ram = yaml.ram || null;
        board.toolchain = yaml.toolchain || [];
        board.supported = yaml.supported || [];
    } else {
        console.log("Unable to find YAML for:", board.boardId);
    }

    const { level, quickstart, customDocMD } = getBoardVerification(board);
    board.level = level;
    board.quickstart = quickstart;
    board.customDocMD = customDocMD;

    return board;
}

function buildBoard(board) {
    const { boardId, level } = board;
    const boardPath = `${docsRoot}/${level}`;
    mkdir(boardPath);
    fs.writeFileSync(`${boardPath}/${boardId}.md`, boardToMdx(board));
}

function getAllBoardPaths(dirPath, arrayOfFiles) {
    return fs.readdirSync(dirPath, { withFileTypes: true, recursive: true})
              .filter(e => e.isFile() && e.name == 'board.yml')
              .map(f => f.path); // the directory path relative to dirPath
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

const boardPaths = getAllBoardPaths(path.join(zephyrRoot, 'boards'));
const boards = [];
const unbuilt = [];

const count = {
    boards: 0,
    built: 0,
};

for (const boardPath of boardPaths) {
    relativePath = path.relative(boardsRoot, boardPath);
    const boardInfoList = getBoardInfo(relativePath);

    for (const info of boardInfoList) {
        count.boards++;
        const { sourceImg, suffix } = findBoardImage(relativePath, info.id);

        if (sourceImg === null) {
            unbuilt.push(`${info.id}:${relativePath}`);
        }

        const board = getBoardMetadata(relativePath, info, suffix);
        boards.push(board);
        createLevelRoot(board.level);
        copyBoardImageToBuild(info.id, sourceImg, suffix);
        buildBoard(board);

        count.built++;
    }
}

boardsToJsonFile(boards, boardsFile);

fs.writeFileSync(`${docsRoot}/_category_.yml`,
                    `\
                    label: 'Hardware Catalog'
                    collapsible: true # make the category collapsible
                    collapsed: false # keep the category open by default
                    `
                    );

console.log(`Built ${count.built} out of ${count.boards} available boards.`);

console.log('Built: ');
console.log(boards.map((b) => `${b.boardId}:${b.boardPath}`).join(' '));

console.log('\nNo image: ');
console.log(unbuilt.join(' '));
