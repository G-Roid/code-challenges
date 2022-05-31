
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


function opposite(number) {
    return -1 * number
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){

    let longest = 'abcdefghijklmnopqrstuv';

    let array = s.split(' ')

    array.forEach(element => {
        if (element.length < longest.length) {
            longest = element;
        }
    })
    // console.log(longest)

    return longest.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function refactored(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  
}

console.log(refactored("bitcoin take over the world maybe who knows perhaps"))
