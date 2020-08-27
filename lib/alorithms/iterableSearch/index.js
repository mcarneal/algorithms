const {
    queryTimer,
} = require(`../../helpers`)
const {
    W,
} = require(`../../winston`)

const iterableSearch = (items, element) => {
    queryTimer.processStarted()
    let index;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === element){
            index = i
        }
    }
    W.info(`Normal search completed in ${queryTimer.processFinished()}`)
    return index
}

module.exports = iterableSearch
