const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

module.exports = isAlternating = (arr) => {
    queryTimer.processStarted()
    let lead = arr[0]
    let tail = arr[arr.length -1]
    let flips = 0
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 1) {
            arr[i] === lead ? flips++ : null
        }
        else if (i % 2 === 0) {
            arr[i] !== lead ? flips++ : null
        }
    }
    if (arr.length % 2 === 1) {
        lead === tail ? flips-- : null
    }
    W.info(`Is alternating finished in ${queryTimer.processFinished()}`)
    return flips
}

