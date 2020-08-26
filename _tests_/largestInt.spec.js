const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    largestInt,
} = require(`../lib/alorithms`)


describe(`largestInt`, () => {
    test(`should return 0 if no matchers are found with no negative numbers`, () => {
        const input = [
            0,
            1,
            0,
            1,
        ]
        const output = 0
        expect(largestInt(input)).toEqual(output)
    })
    test(`should return 0 if no matchers are found but there are negative numbers`, () => {
        const input = [
            1,
            2,
            3,
            -4
        ]
        const output = 0
        expect(largestInt(input)).toEqual(output)
    })
    test(`should return the largest int when only one pair is present`, () => {
        const input = [
            3,
            2,
            -10,
            5,
            -3,
        ]
        const output = 3
        expect(largestInt(input)).toEqual(output)
    })
    test(`should return the largest int when two pairs are present`, () => {
        const input = [
            3,
            2,
            -2,
            5,
            -3
        ]
        const output = 3
        expect(largestInt(input)).toEqual(output)
    })
    test(`should return the largest int when multiple pairs are present`, () => {
        const input = [
            0 ,
            1,
            2,
            3,
            4,
            -1,
            -2,
            -3,
            -4,
            -5
        ]
        const output = 4
        expect(largestInt(input)).toEqual(output)
    })
})

