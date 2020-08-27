const {
    W,
} = require(`../../lib/winston`)
const {
    binarySearch,
    iterableSearch,
} = require(`../../lib/alorithms`)

class BinaryVsIterableSearchRunner {
    constructor({
        limit,
        target,
    }) {
        this.array = []
        this.limit = limit
        this.target = target

        for (let i = 0; i < limit; i++) {
            this.array.push(i)
        }
    }
    run () {
        W.info(`BinaryVSIterableSearch initiated`)
        W.info(`Limit set to ${this.limit}`)

        const binaryResults = binarySearch(this.array, this.target)
        const iterableResults = iterableSearch(this.array, this.target)

        W.info(`Binary Search Results: ${binaryResults}`)
        W.info(`Iterable Search Results: ${iterableResults}`)
    }
}

module.exports = BinaryVsIterableSearchRunner
