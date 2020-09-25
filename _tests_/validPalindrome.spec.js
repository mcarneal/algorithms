const {
    describe,
    test,
} = require(`@jest/globals`)
const {
    validPalindrome,
} = require(`../lib/alorithms`)

describe(`Return the true for a valid palindrome`, ()=> {
    test(`return 0 for l`, () => {
        const input = `A man, a plan, a canal: Panama`
        const output = true
        expect(validPalindrome(input)).toEqual(output)
    })
    test(`return false for an invalid palindrome`, () => {
        const input = `race a car`
        const output = false
        expect(validPalindrome(input)).toEqual(output)
    })
})
