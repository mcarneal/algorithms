const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

module.exports = diagonalDifference = (arr) => {
    let firstString = 0
    let secondString = 0
    for (let i = 0; i < arr.length; i++) {
        let rightI = (arr.length - 1) - i
        firstString += arr[i][i]
        secondString+= arr[i][rightI]
    }
    return Math.abs(firstString - secondString)
}

