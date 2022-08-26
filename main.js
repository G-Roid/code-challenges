console.log('hello')

// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    return consonantStart(str)
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));

function consonantStart(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = []
    let consonantPattern = ''

    if(vowels.includes(input[0])) {
        result = input + 'way'
    } else {
        for(let i = 0; i < input.length; i++) {
            if(!vowels.includes(input[i].toLowerCase())) {
                consonantPattern += input[i]
                if(consonantPattern.length === input.length) {
                    result = consonantPattern + 'ay'
                    return result
                }
            } else {
               let newEnding = input.slice(0, i)
              //  console.log(newEnding)
               result = input.slice(i) + newEnding + 'ay'
               break
            }
        }
    }
    
    return result

}


// console.log(translatePigLatin("california")) //should return the string aliforniacay.