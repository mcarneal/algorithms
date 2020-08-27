const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    countingSort,
} = require(`../lib/alorithms`)

describe(`Returns a sorted array`, () => {
    test(`first test`, () => {
        const inputArray = [
            1,
            1,
            3,
            2,
            1,
        ]
        const input = countingSort(inputArray)
        const output = `11123`
        expect(input.join(``)).toEqual(output)
    })
    test(`can sort a string with 100 indexes`, () => {
        const inputArray = [
            63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83,
            8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89,
            80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10,
            94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32,
            18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87,
            42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20,
            1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65,
            16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33,
        ]
        const input = countingSort(inputArray)
        const output = '113368991012131616182021212223242525252727303032323233333334393940404142434444464648505356565759606163656767686969697070737374757576787879798081818283838485868687878989899090919294959698989999'
        expect(input.join(``)).toEqual(output)
    })
})

