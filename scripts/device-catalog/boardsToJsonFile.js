const fs = require('fs');

function boardsToJsonFile(boards, jsonFilePath) {
    const json = fs.createWriteStream(jsonFilePath);
    json.write('[');

    let count = 0;

    for (board of boards) {
        if (count !== 0) json.write(',');
        json.write(JSON.stringify(board));
        count++;
    }

    json.write(']');
    json.close();
}

module.exports = boardsToJsonFile;