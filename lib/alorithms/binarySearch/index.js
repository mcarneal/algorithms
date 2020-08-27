const {
    queryTimer,
} = require(`../../helpers`)
const {
    W,
} = require(`../../winston`)
const binarySearch = (items, value) => {
    queryTimer.processStarted()
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] !== value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
    W.info(`Binary search completed in ${queryTimer.processFinished()}`)
    return (items[middleIndex] !== value) ? -1 : middleIndex;
}

module.exports = binarySearch
