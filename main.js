//Length of a string
let myString = ' chocolate '
console.log(`Original String: ${myString} => length: ${myString.length}`)
console.log(myString.length)

//Remove white space
console.log(myString.trim())
console.log(`After Trim: ${myString} => Length: ${myString.length}`)

//Check for substring
console.log(myString.includes('late'))
console.log(myString.indexOf('late'))


//Replace a substring with new values
console.log(myString.replace('cho', 'poc'))


// Non destructive copy of a string
let slicedString = myString.slice(0, 6)
console.log(slicedString)

// Returns an array based on split

let str = 'a,b,c,d,e'
console.log(str.split(','))

// Repeate a string multiple times
console.log(str.repeat(4))

//Return a char at an index
console.log(myString.charAt(6))

// Return the ASCII Code for a character
console.log(myString.charCodeAt(myString.indexOf('a')))

//What does concat do?
const mars = myString.concat(' bars').trim()
console.log(mars)