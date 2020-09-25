module.exports = reverseString = (s) => {
    for (let i = s.length -1; i >= 0 ; i--) {
        if (s[i -1]) {
            let a = s[i-1]
            s.splice(i-1,1)
            s.push(a)
        }
    }
    return s
}