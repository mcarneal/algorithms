const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    plusMinusRatio,
} = require(`../lib/alorithms`)

describe(`returns the ratio of postive, negative, and zero ints within an array`, () => {
    test(`checks the positive ratio:`, () => {
        const inputArray = [
            -4,
            3,
            -9,
            0,
            4,
            1,
        ]
        const input = plusMinusRatio(inputArray)
        const output = `0.500000`
        expect(input[0]).toEqual(output)
    })
        test(`checks the negative ratio:`, () => {
            const inputArray = [
                -4,
                3,
                -9,
                0,
                4,
                1,
            ]
            const input = plusMinusRatio(inputArray)
            const output = `0.333333`
            expect(input[1]).toEqual(output)
        })
    test(`checks the zero ratio:`, () => {
        const inputArray = [
            -4,
            3,
            -9,
            0,
            4,
            1,
        ]
        const input = plusMinusRatio(inputArray)
        const output = `0.166667`
        expect(input[2]).toEqual(output)
    })
})
