const {
    W,
} = require(`../../lib/winston`)
const {
    queryTimer,
} = require(`../../lib/helpers`)
const {
    countingSort,
} = require(`../../lib/alorithms`)

class CountSortVSSortRunner {
    constructor({
        size,
    }) {
        this.size = size
        this.array = []
        this.init()
    }
    init() {
        for (let i = 0; i < this.size; i++ ) {
            this.array.push(Math.floor(Math.random() * 100))
        }
    }
    run() {
        W.info(`CountSortVSSort Runner initiated`)
        const countSortResults = countingSort(this.array)
        const normalSortResults = this.sort(this.array)


    }
    sort(arr) {
        queryTimer.processStarted()
        arr.sort((a, b) => {
            return a - b
        })
        W.info(`normalSort finished in ${queryTimer.processFinished()}`)
        return arr
    }
}
module.exports = CountSortVSSortRunner
