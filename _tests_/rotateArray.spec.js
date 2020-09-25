const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    rotateArray,
} = require(`../lib/alorithms`)

describe(`Rotates an array k times`, ()=> {
    test(`rotates an array of positive nums 3 times`, () => {
        const input = [1,2,3,4,5,6,7]
        const k = 3
        const output = [5,6,7,1,2,3,4]
        expect(rotateArray(input, k)).toEqual(output)
    })
    test(`rotates an array with positive and negative nums 2 times`, () => {
        const input = [-1,-100,3,99]
        const k = 2
        const output = [3,99,-1,-100]
        expect(rotateArray(input, k)).toEqual(output)
    })
})
