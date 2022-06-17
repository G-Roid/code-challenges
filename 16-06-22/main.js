// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3

    if (average >= 90 && average <= 100) {
        return 'A'
    } else if (average >= 80 && average < 90) {
        return 'B'
    } else if (average >= 70 && average < 80) {
        return 'C'
    } else if (average >= 60 && average <= 70) {
        return 'D'
    } 
    return 'F'

  }


//   You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
    // // Get string length
    let n = s.length
    
    // // Return single character if single letter
    if (n == 1) return s

    // // If odd return the the length - 1 / index
    else if (n % 2 !== 0) {
        // console.log('odd number')
        return s[(n - 1) / 2]
    }

    // // Else if even return the string (length - 1 / 2 ) -> length /2
    else {
        console.log(n)
        console.log(s[1])
    
            let result = ''
            result += s[(n / 2) - 1]
            result += s[(n / 2)]
            // console.log(result)
            
            return (result)
    }
}

// console.log(getMiddle('es'))


// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
    //Parameters
        // a and b are both non empty arrays

    //Return
        // absolute difference

    //Edge??

    //Pseudo code
        // calulate the volume of a
        //calculate the volume of b
        // calculat the absolute difference

        return Math.abs(calculateVolume(a) - calculateVolume(b))     

  }


function calculateVolume(list) {
    return list.reduce((acc, current) => {
        return (acc * current)
    }, 1)
}
  
// let a = [1, 2, 3]

// console.log(calculateVolume(a))

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    //Prep
        // parameter is an integer
    //Return
        // Integer
    //Edge
        // year < 100 must return 1
        // 1900 -> 19
    //Psuedo code
        // year / 100 
        // round down
        // add one  

    return (year % 100 === 0) ? year / 100 : Math.floor((year / 100) + 1)
  }