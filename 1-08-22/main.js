// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function differentNumber(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            return false
        }
        else return true
    }
}

console.log(differentNumber([1, 2, 3]))
console.log(differentNumber([2, 2, 2]))