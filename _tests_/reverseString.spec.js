const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    reverseString,
} = require(`../lib/alorithms`)

describe(`Reverses a string without adding extra memory`, ()=> {
    test(`first test`, () => {
        const input = ["h","e","l","l","o"]
        const output = ["o","l","l","e","h"]
        expect(reverseString(input)).toEqual(output)
    })
    test(`second test`, () => {
        const input = ["H","a","n","n","a","h"]
        const output = ["h","a","n","n","a","H"]
        expect(reverseString(input)).toEqual(output)
    })
})