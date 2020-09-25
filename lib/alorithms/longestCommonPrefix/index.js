module.exports = longestCommonPrefix = (strs) => {
    strs.sort()
    let result = ``
    if (strs.length === 0 || strs[0].length === 0) {
        return result
    }
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0].charAt(i) === strs[strs.length - 1].charAt(i)) {
            result+=strs[0][i]
        } else {
            break
        }
    }
    return result
}