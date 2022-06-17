// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    if (!str) {
        return true;
    } 

    let lettersArray = []

    Array.from(str.toLowerCase()).filter(element => {
        if ( !lettersArray.includes(element) ) {
            lettersArray.push(element)
        }
        
    })
    return ( (lettersArray.length === str.length) ) 
}

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }

function refined(str) {
    return  new Set(str.toUpperCase()).size == str.length
}

console.log(isIsogram('abc'))
console.log(refined('abc'))