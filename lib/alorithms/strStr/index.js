module.exports = strStr = (haystack, needle) => {
    if (needle === ``) {
        return 0
    }
    if (needle.length > haystack.length) {
        return -1
    }
    if (haystack === needle) {
        return 0
    }
    return haystack.indexOf(needle)
}
