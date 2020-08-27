const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    isAlternating,
} = require(`../lib/alorithms`)

describe(`isAlternating: should return minimum flips required to alternate the string`, () => {
    test(`it should return 0 if no flips occurred`, () => {
        const inputArray = [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
        ]
        const input = isAlternating(inputArray)
        const output = 0
        expect(input).toEqual(output)
    })
    test(`it should return 1 if one flips occurred`, () => {
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
        const input = isAlternating(inputArray)
        const output = 1
        expect(input).toEqual(output)
    })
    test(`it should return 2 if two flips occurred`, () => {
        const inputArray = [
            1,
            1,
            0,
            1,
            1,
        ]
        const input = isAlternating(inputArray)
        const output = 2
        expect(input).toEqual(output)
    })
    test(`it should return 2 if two flips occurred`, () => {
        const inputArray = [
            0,
            1,
            1,
            0,
        ]
        const input = isAlternating(inputArray)
        const output = 2
        expect(input).toEqual(output)
    })
})
