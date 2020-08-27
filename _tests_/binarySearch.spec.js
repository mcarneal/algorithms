const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    binarySearch,
} = require(`../lib/alorithms`)

describe(`binarySearch: Should return the index of an element within an array`, () => {
    test(`Should return an integer`, () => {
        const inputArray = [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ]
        const output = binarySearch(inputArray, 1)
        expect(typeof(output)).toEqual(`number`)
    })
    test(`Should return the index of a element found`, () => {
        const inputArray = [
            1,
            5,
            7,
            8,
            3,
        ]
        const input = binarySearch(inputArray, 7)
        const output = 2
        expect(input).toEqual(output)
    })
    test(`Should return -1 if no element is found`, () => {
        const inputArray = [
            1,
            2,
            3,
            4,
            5,
        ]
        const input = binarySearch(inputArray, 100)
        const output = -1
        expect(input).toEqual(output)
    })
})
