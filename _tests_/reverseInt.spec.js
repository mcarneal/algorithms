const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    reverseInt,
} = require(`../lib/alorithms`)

describe(`Return a reversed integar omitting leading 0's`, ()=> {
    test(`test1`, () => {
        const input = 123
        const output = 321
        expect(reverseInt(input)).toEqual(output)
    })
    test(`test2`, () => {
        const input = -123
        const output = -321
        expect(reverseInt(input)).toEqual(output)
    })
    test(`test3 0's`, () => {
        const input = 120
        const output = 21
        expect(reverseInt(input)).toEqual(output)
    })
    test(`test3 0's`, () => {
        const input = 0
        const output = 0
        expect(reverseInt(input)).toEqual(output)
    })
})
