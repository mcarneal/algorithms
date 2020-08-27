require('dotenv').config()
const CountSortVSSort = require(`./countSortVSSort`)
module.exports = app => {
    const countSortVSSort = new CountSortVSSort({
        size: 10000000,
    })
    countSortVSSort.run()
}
