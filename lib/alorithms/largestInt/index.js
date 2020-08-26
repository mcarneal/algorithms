const largestInt = (arr) => {
    let map = {}
    let largestInt = 0
    for (const num of arr) {
        if (num < 0) {
            if (map[Math.abs(num)]) {
                if (Math.abs(num) > largestInt) {
                    largestInt = num
                }
            }
            else {
                map[num] = true
            }
        }
        else {
            let number = -(num)
            if (map[number]) {
                if (num > largestInt) {
                    largestInt = num
                }
            }
            else {
                map[num] = true
            }
        }
    }
    return Math.abs(largestInt)
}
module.exports = largestInt
