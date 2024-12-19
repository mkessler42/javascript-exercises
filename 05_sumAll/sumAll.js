const sumAll = function(...array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0 || !(Number.isInteger(array[i]))) {
            return 'ERROR';
        }
    }
    if (array[1] < array[0]) {
        for (var k = array[1]; k <= array[0]; k++) {
            sum += k;
        }
    }
    else {
        for (var j = array[0]; j <= array[1]; j++) {
            sum += j;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
