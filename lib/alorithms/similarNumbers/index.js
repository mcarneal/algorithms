const {
    W
} = require(`../../winston`)
const {
    queryTimer,
} = require(`../../helpers`)

module.exports = similarNumbers = (a, b) => {
    let arr1 = a.split(``)
    let arr2 = b.split(``)

    function permute(permutation) {
        var length = permutation.length,
            result = [permutation.slice()],
            c = new Array(length).fill(0),
            i = 1, k, p;

        while (i < length) {
            if (c[i] < i) {
                k = i % 2 && c[i];
                p = permutation[i];
                permutation[i] = permutation[k];
                permutation[k] = p;
                ++c[i];
                i = 1;
                result.push(permutation.slice());
            } else {
                c[i] = 0;
                ++i;
            }
        }
        return result;
    }

    const findPermutations = (origString ,string) => {
        if (!string || typeof string !== "string"){
            return "Please enter a string"
        } else if (string.length < 2 ){
            console.log(`found 2`)
            return string
        }
        console.log(`start`)
        let map = {}
        let permutationsArray = []
        for (let i = 0; i < string.length; i++){
            console.log(`foor loop 1`)
            let char = string[i]
            if (string.indexOf(char) !== i) {
                continue
            }
            let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
            for (let permutation of findPermutations( origString,remainingChars)){
                if (char === `0` && (char + permutation).length === origString.length){
                    continue
                }
                permutationsArray.push(char + permutation) }
        }
        return permutationsArray
    }
    let sortedA = arr1.sort().join(``)
    let sortedB = arr2.sort().join(``)

    if ((a[0]  === `0` ) || ( b[0]  === `0`)) {
        return findPermutations(b,b).length
    }
    else if (a.length !== b.length) {
        return findPermutations(b,b).length

    }
    else if (sortedA !== sortedB) {
        return findPermutations(b,b).length
    }
    else if (sortedA === sortedB) {
        return permute(a).length
    }
}
//
// const a = `7343101008`
// const b = `7303008114`
const a = `1100`
const b = `1001`
const input = similarNumbers(a,b)
const output = 105840
