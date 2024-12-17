const repeatString = function getRepeatedString(string, num) {
    var newString = ''
    for (let i = 0; i < num; i++) {
        newString.concat(string);
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
