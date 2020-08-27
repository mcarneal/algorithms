require('dotenv').config()

const runner = process.argv[2]

const app = require(`./${runner}`)

app()
