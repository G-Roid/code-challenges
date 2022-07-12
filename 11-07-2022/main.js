// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function checkXO(input) {
    let exes = 0
    let ohs = 0

    // let arr = input.split('')
    // console.log(arr)

    input.split('').forEach(element => {
        if (element.toLowerCase() === 'o') {
            ohs++
        } else if (element.toLowerCase() === 'x') {
            exes++
        }
    })
    // console.log(exes)
    // console.log(ohs)

    return (exes == ohs) ? true : false
}

console.log(checkXO('ooxx'))