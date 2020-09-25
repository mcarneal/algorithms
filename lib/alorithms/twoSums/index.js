module.exports = twoSums = (nums, target) => {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i]
        if (map.hasOwnProperty(k) && map[k] !== i) {
            return [i, map[k]]
        }
    }
}