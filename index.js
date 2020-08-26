require('dotenv').config()

const {
    largestInt,
} = require(`./lib/alorithms`)
const {
    W,
} = require(`./lib/winston`)

const run = () => {
    try {
        W.info(`Application initiated`)
        largestInt([0,1,-1,2])
        W.info(`Application terminated`)
    }
    catch (e) {
        W.error(`Error occurred while initiating the application`, e)
    }
}

run()
