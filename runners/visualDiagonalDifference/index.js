require('dotenv').config()
// const BinaryVsIterableSearchRunner = require(`./binaryVsIterableSearch`)
const VisualDiagonalDifference = require(`./visualDiagonalDifference`)
const app = () => {
    const visualDiagonalDifference =  new VisualDiagonalDifference({
        size: 17,
        speed: 100,
    })
    visualDiagonalDifference.run()

}
module.exports = app
