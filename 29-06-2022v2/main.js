// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let result = []
    let theString = ''

    for(let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            result.push(0)
        }  else {
            result.push(1)
        }
    }
    result.forEach(char => {
        theString += char
    })
    return theString
}