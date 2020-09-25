module.exports = rotateArray = (nums, k) => {
    let remainder = nums.splice(nums.length - k)
    nums.unshift(...remainder)
}