const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    bracketCount,
} = require(`../lib/alorithms`)

describe(`Should return the amount of brackets needed to balance a string:` , () => {
    test(`Should return a number: `, () => {
        const inputString = `()()()`
        const input = bracketCount(inputString)
        const output = `number`
        expect(typeof(input)).toEqual(output)
    })
    test(`Should return 0: `, () => {
        const inputString = `()()()`
        const input = bracketCount(inputString)
        const output = 0
        expect(input).toEqual(output)
    })
    test(`Should return 1 when one open bracket is given: `, () => {
        const inputString = `(`
        const input = bracketCount(inputString)
        const output = 1
        expect(input).toEqual(output)
    })
    test(`Should return 1 when one closed bracket is given: `, () => {
        const inputString = `)`
        const input = bracketCount(inputString)
        const output = 1
        expect(input).toEqual(output)
    })
    test(`Should return 3 when three closed brackets are given: `, () => {
        const inputString = `)))`
        const input = bracketCount(inputString)
        const output = 3
        expect(input).toEqual(output)
    })
    test(`Should return 2 when two extra closed brackets are given `, () => {
        const inputString = `))()`
        const input = bracketCount(inputString)
        const output = 2
        expect(input).toEqual(output)
    })
    test(`Should return 0 when an empty string is given `, () => {
        const inputString = ``
        const input = bracketCount(inputString)
        const output = 0
        expect(input).toEqual(output)
    })
})

