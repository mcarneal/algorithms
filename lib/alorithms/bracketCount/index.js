const {
    queryTimer,
} = require(`../../helpers`)
const {
    W,
} = require(`../../winston`)

module.exports = bracketCount = (s) => {
    queryTimer.processStarted()
    if(s.length===0) return 0
    let stack = []
    let arr = s.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==='('){
            stack.push(arr[i])
        }
        else if (stack.length && stack[stack.length -1] !== `(` && arr[i] === `)`) {
            stack.push(arr[i])
        }
        else if(!stack.length && arr[i] === ')'){
            stack.push(arr[i])
        }
        else {
            stack.pop()
        }
    }
    W.info(`bracketCount Finished in ${queryTimer.processFinished()}`)
    return stack.length
}
