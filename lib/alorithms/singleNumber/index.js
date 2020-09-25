module.exports = singleNumber = (nums) => {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]].count ++
        }
        else {
            map[nums[i]] = {count: 0}
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]].count === 0) {
            return  nums[i]
        }
    }
}

