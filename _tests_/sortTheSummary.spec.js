const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    sortTheSummary,
} = require(`../lib/alorithms`)


describe(`it should return a sorted array based on element frequency`, () => {
    test(`first test:`, () => {
        const inputArray = [2,1,2,2]
        const input = sortTheSummary(inputArray)
        const output = `2,3,1,1`
        expect(input.join()).toEqual(output)
    })
    test(`second test:`, () => {
        const inputArray = [3,3,1,2,1]
        const input = sortTheSummary(inputArray)
        const output = `1,2,3,2,2,1`
        expect(input.join()).toEqual(output)
    })
    test(`third test:`, () => {
        const inputArray = [7,12,3]
        const input = sortTheSummary(inputArray)
        const output = `3,1,7,1,12,1`
        expect(input.join()).toEqual(output)
    })
    test(`third test:`, () => {
        const inputArray = [7,12,3]
        const input = sortTheSummary(inputArray)
        const output = `3,1,7,1,12,1`
        expect(input.join()).toEqual(output)
    })
    test(`fourth hard test:`, () => {
        const inputArray = [
            13, 1, 6, 5, 15, 14, 18, 2, 9, 1, 5, 11, 1, 4, 13, 11, 5, 12, 17, 1, 17, 14, 7, 4, 20, 7, 2, 2, 17, 13, 17, 15, 11, 20, 8, 12, 17, 13, 18, 12, 15, 1, 5, 6, 2, 5, 3, 6, 13, 8, 8, 5, 6, 19, 13, 13, 4, 15, 4, 8, 20, 13, 12, 14, 17, 16, 5, 1, 7, 6, 5, 19, 18, 7, 14, 8, 19, 10, 6, 5, 12, 6, 12, 18, 8, 5, 20, 11, 2, 1, 3, 13, 16, 9, 2, 8, 20, 11, 20, 18,
        ]
        const input = sortTheSummary(inputArray)
        const output = `5,10,13,9,1,7,6,7,8,7,2,6,12,6,17,6,20,6,11,5,18,5,4,4,7,4,14,4,15,4,19,3,3,2,9,2,16,2,10,1`
        expect(input.join()).toEqual(output)
    })

})
