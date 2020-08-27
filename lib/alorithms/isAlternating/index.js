const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

const isAlternating = (arr) => {
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
    return flips
}

module.exports = isAlternating
