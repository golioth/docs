const fs = require('fs');

function boardsToJsonFile(boards, jsonFilePath) {
    const json = fs.createWriteStream(jsonFilePath);
    json.write('[\n');

    let count = 0;

    for (board of boards) {
        if (count !== 0) json.write(',\n');
        json.write(JSON.stringify(board));
        count++;
    }

    json.write('\n]');
    json.close();
}

module.exports = boardsToJsonFile;