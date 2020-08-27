require('dotenv').config()
const {
    W,
} = require(`./lib/winston`)
const {
    isAlternating
} = require(`./lib/alorithms`)
const app = () => {
    const inputArray = [
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
    ]
    const results = isAlternating(inputArray)
    W.info(` results: ${results}`)
}
app()
