const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    singleNumber,
} = require(`../lib/alorithms`)

describe(`Finds a single number in an array of duplicates`, ()=> {
    test(`first test`, () => {
        const input = [1,1,2]
        const output = 2
        expect(singleNumber(input)).toEqual(output)
    })
    test(`second test`, () => {
        const input = [4,1,2,1,2]
        const output = 4
        expect(singleNumber(input)).toEqual(output)
    })
})