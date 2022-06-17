// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number=function(array){
    let result = []
    let counter = 1

    array.forEach(value => {        
        result.push(`${counter}: ${value}`)
        counter++
    })
    return result
}

function refactored(arr) {
    return arr.map((value, index) => {
        return (index + 1) + ': ' + value
    })

}

console.log(number(["a", "b", "c"]))
console.log(refactored(["a", "b", "c"]))
