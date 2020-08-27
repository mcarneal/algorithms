require('dotenv').config()
const BinaryVsIterableSearchRunner = require(`./binaryVsIterableSearch`)
const app = () => {
    const binaryVsIterableSearch = new BinaryVsIterableSearchRunner({
        limit: 5500000,
        target: 50000,
    })
    binaryVsIterableSearch.run()
}
module.exports = app
