const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

module.exports = countingSort = (arr) => {
    queryTimer.processStarted()
    let results = []
    let largestNum = 0

    for (const num of arr) {
        num > largestNum ? largestNum = num : null
        }
    let indexArray = new Array(largestNum).fill(0)
    for (const num of arr) {
        if (indexArray[num]) {
            indexArray[num] += 1
        }
        else {
            indexArray[num] = 1
        }
    }
    for (const i in indexArray) {
        for (let j = 0; j < indexArray[i]; j++) {
            results.push(i)
        }
    }
    W.info(`counting sort finished in ${queryTimer.processFinished()}`)
    return results
}

