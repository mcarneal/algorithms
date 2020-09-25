const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    twoSums,
} = require(`../lib/alorithms`)

describe(`Returns to indicies of two elements that add up to the target`, ()=> {
    test(`first test`, () => {
        const input = [2,7,11,15]
        const target = 9
        const output = [0,1]
        expect(twoSums(input, target)).toEqual(output)
    })
    test(`second test`, () => {
        const input = [3,2,4]
        const target = 6
        const output = [1,2]
        expect(twoSums(input, target)).toEqual(output)
    })
    test(`third test`, () => {
        const input = [3,3]
        const target = 6
        const output = [0,1]
        expect(twoSums(input, target)).toEqual(output)
    })
})
