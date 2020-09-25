module.exports = reverseInt = (x) => {
    let copy = x
    let reverseN;
    let y =  x.toString().split(``)
    if (y[0] === `-`) {
        reverseN =+ String(Math.abs(copy)).split('').reverse().join(``)
        if (reverseN > 0x7FFFFFFF) {
            return 0;
        } else {
            return -Math.abs(reverseN)
        }
    }
    else {
        reverseN =+ String(Math.abs(copy)).split('').reverse().join(``)
        if (reverseN > 0x7FFFFFFF) {
            return 0;
        } else {
            return Math.abs(reverseN)
        }
    }
}

