const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

module.exports = sortTheSummary = (arr) => {
    const map = {}
    const firstArray = []
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] >= 0) {
            firstArray[map[arr[i]]][1] +=1
        }
        else {
            firstArray.push([arr[i], 1])
            map[arr[i]] = firstArray.length - 1
        }
    }
    firstArray.sort((a,b) => {
        return b[1] - a[1]
    })
    firstArray.sort((a,b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        }
        else {
            return b[1] - a[1]
        }
    })
    return firstArray
}

sortTheSummary([3,3,1,2,1])
