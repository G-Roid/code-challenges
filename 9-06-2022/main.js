// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return Number(inputString.split(' ')[0])
}

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
    return (base % factor ? false : true)
}

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// return an array containing all of the strings in the input array except those that match strings in geese

// ARRAYS

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

        return birds.filter((value) => {
        if (!geese.includes(value)) {
            return value
        }
    })
};

function refactoredGoose(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(element => !geese.includes(element))
}

    // console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

    // console.log(refactoredGoose(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  
    switch(current) {
        case 'green':
            return 'yellow'
        case 'yellow': 
            return 'red'
        case 'red':
            return 'green'
    }  
}

function lightsUpdated(current) {
    return current === 'green' ? 'yellow' : current === 'red' ? 'green' : 'red'
}

// console.log(updateLight('green'))
// console.log(updateLight('yellow'))
// console.log(updateLight('red'))

// console.log(lightsUpdated('green'))
// console.log(lightsUpdated('yellow'))
// console.log(lightsUpdated('red'))

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // l.forEach(e => console.log(typeof e))
    return l.filter(e => {
        return (typeof e == 'number')
    })
}

// function filter_list(l) {
//     return l.filter(function(v) {return typeof v == 'number'})
//   }

console.log(typeof 0)

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
