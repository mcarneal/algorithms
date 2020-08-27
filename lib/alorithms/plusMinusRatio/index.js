const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

module.exports = plusMinusRatio = (arr) => {
    queryTimer.processStarted()
    let positive = 0
    let negative = 0
    let zeros = 0
    for (const num of arr) {
        if (num > 0) {
            positive++
        }
        else if (num < 0) {
            negative++
        }
        else {
            zeros++
        }
    }
    positive = (positive / arr.length).toPrecision(6)
    negative = (negative / arr.length).toPrecision(6)
    zeros = (zeros / arr.length).toPrecision(6)
    W.info(`plusMinusRatio finished in ${queryTimer.processFinished()}`)
    return [
        positive,
        negative,
        zeros,
    ]
}
