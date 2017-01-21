// Input

var currentline = 0;
var _input;

function read() {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    _input = "";
    process.stdin.on("data", function(input) {
        _input += input;
    });

    process.stdin.on("end", function() {
        _input = _input.split("\n");
    });

    return process.stdin;
}

function readLine() {
    return _input[currentline++].trim();
}

function readInt() {
    return parseInt(readLine());
}

function readStringArray() {
    return readLine().split(" ");
}

function readNumberArray() {
    return readStringArray().map(Number);
}

module.exports = {
    read: read,
    readLine: readLine,
    readInt: readInt,
    readStringArray: readStringArray,
    readNumberArray: readNumberArray
};
