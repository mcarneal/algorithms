require('dotenv').config()
const BinaryVsIterableSearchRunner = require(`./binaryVsIterableSearch`)
const app = () => {
    const binaryVsIterableSearch = new BinaryVsIterableSearchRunner({
        limit: 550,
        target: 500,
    })
    binaryVsIterableSearch.run()
}
module.exports = app
