const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    longestCommonPrefix,
} = require(`../lib/alorithms`)

describe(`Return the longest prefix between an array of strings`, ()=> {
    test(`test1`, () => {
        const input = ["flower","flow","flight"]
        const output = `fl`
        expect(longestCommonPrefix(input)).toEqual(output)
    })
    test(`test1`, () => {
        const input = ["dog","racecar","car"]
        const output = ``
        expect(longestCommonPrefix(input)).toEqual(output)
    })
})
