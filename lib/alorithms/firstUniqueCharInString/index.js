module.exports = firstUniqueCharInString = (s) => {
    const hashMap = {}
    for (let i = 0; i <s.length; i++) {
        if (hashMap[s[i]]) {
            hashMap[s[i]].count++
        }
        else {
            hashMap[s[i]] = {
                count: 1,
                index: i,
            }
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]].count === 1) {
            return hashMap[s[i]].index
        }
    }
    return -1
}