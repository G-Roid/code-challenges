// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    result = ''
    Array.from(str).forEach(e => {
        result += (e + e);
    })
    return result
}

function refactored(str) {
    return str.split('').map(e => e + e).join('')
}

const simple = (str) => str.split('').map(e => e + e).join('')


console.log(refactored('String'))
console.log(simple('helloYou'))

  