const {
    describe,
    test,
} = require(`@jest/globals`)

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        expect(2).toEqual(2);
    })
    test("it should pass", () => {
        expect(1).toEqual(1);
    })
})
describe("Second thing for this to do", () => {
    test(`this should do something simple`, () => {
        expect(10).toEqual(10)
    })
})
