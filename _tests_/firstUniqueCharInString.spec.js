const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    firstUniqueCharInString,
} = require(`../lib/alorithms`)

describe(`Return the first unique chars index in a string`, ()=> {
    test(`return 0 for l`, () => {
        const input = `leetcode`
        const output = 0
        expect(firstUniqueCharInString(input)).toEqual(output)
    })
    test(`return 2 for v`, () => {
        const input = `loveleetcode`
        const output = 2
        expect(firstUniqueCharInString(input)).toEqual(output)
    })
    test(`return -1 if no unique chars are found`, () => {
        const input = `dood`
        const output = -1
        expect(firstUniqueCharInString(input)).toEqual(output)
    })
})
