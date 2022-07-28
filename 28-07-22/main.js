// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


//P
    // a is an array of numbers
    // in and integer
//R
    // return true if each element is less than or equal to the limit
//E
    // return true if the value is equal to the limit
//Psuedo code
    // loop through each element of the array
        // if element > limit => return false

function smallEnough(a, limit){
    let result = true;

    a.forEach(element => {
        if (element > limit) {
            result =  false
            return
        }
    })
    // console.log('loop finished')

    return result
}

function slim(a, limit) {
    return ( Math.max(...a) <= limit)
}

console.log(smallEnough([5, 6, 7], 8))
console.log(smallEnough([5, 6, 7], 7))
console.log(smallEnough([5, 6, 7], 1))

console.log(slim([5, 6, 7], 8))
console.log(slim([5, 6, 7], 7))
console.log(slim([5, 6, 7], 1))