module.exports = validPalindrome = (s) => {
    s = s.replace(/[^\w\s]/gi, '')
        .toLowerCase()
        .split(` `)
        .join(``)
    let reverseS = s.split(``).reverse().join(``)
    if (reverseS === s ) {
        return true
    }
    else {
        return false
    }
}