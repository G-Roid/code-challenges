// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let splitwords = str.split(' ')
    console.log(splitwords)



    let wordArray = splitwords.map(element => {
        return element.split('').reverse().join('')
        
    })


    return wordArray.join(' ')
}

console.log(reverseWords("This is an example!"))

// function reverseWords(str) {
//     return str.split(' ').map(function(word){
//       return word.split('').reverse().join('');
//     }).join(' ');
//   }