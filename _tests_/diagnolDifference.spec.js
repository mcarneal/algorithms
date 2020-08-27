const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    diagonalDifference,
} = require(`../lib/alorithms`)

describe(`Return the absolute difference between two opposite diagonal lines in a 2d matrix`, () => {
    test(`Returns abs value when a square is 3 wide: `, () => {
        const inputArray = [
            [ 11, 2, 4 ],
            [ 4, 5, 6 ],
            [ 10, 8, -12 ]
        ]
        const input = diagonalDifference(inputArray)
        const output = 15
        expect(input).toEqual(output)
    })
    test(`Returns abs value when a square is 5 wide: `, () => {
        const inputArray = [
            [10, 4, 5, -1, 13],
            [5, 3, 10, 4, -1],
            [45, 12, 5, 1, 40],
            [3, 2, 9, 10, 10],
            [4, 8, 3, 3, -4],
        ]
        const input = diagonalDifference(inputArray)
        const output = 4
        expect(input).toEqual(output)
    })
    test(`Returns abs value when a square is 7 wide: `, () => {
        const inputArray = [
            [10, 4, 5, -1, 13, 4, 8],
            [5, 3, 10, 4, -1, -4, 9],
            [45, 12, 5, 1, 40, 5, 8],
            [3, 2, 9, 10, 10, 1, 50],
            [4, 8, 3, 3, -4, -16, 4],
            [4, 7, 2, 10, 30, 10, 10],
            [56, 10, 40, -1, -1 ,1 ,6],
        ]
        const input = diagonalDifference(inputArray)
        const output = 80
        expect(input).toEqual(output)
    })
})
