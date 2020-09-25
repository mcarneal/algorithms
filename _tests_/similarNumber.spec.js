const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    similarNumbers,
} = require(`../lib/alorithms`)


describe(`find perms of similar number`, () => {
    test(`first test`, () => {
        const a = `1234`
        const b = `2341`
        const input = similarNumbers(a,b)
        const output = 24
        expect(input).toEqual(output)
    })

    test(` uneven numbers test`, () => {
        const a = `1100`
        const b = `1001`
        const input = similarNumbers(a,b)
        const output = 3
        expect(input).toEqual(output)
    })
    test(` not balanced test`, () => {
        const a = `1234`
        const b = `1213`
        const input = similarNumbers(a,b)
        const output = 12
        expect(input).toEqual(output)
    })
    test(` long test`, () => {
        const a = `7343101008`
        const b = `7303008114`
        const input = similarNumbers(a,b)
        const output = 105840
        expect(input).toEqual(output)
    })

})
