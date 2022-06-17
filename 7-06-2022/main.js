// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += s
    }
    return result
}

// console.log(repeatStr(5, "Hello"))

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split(' ').join('')
}

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

var summation = function (num) {
    let result = 0
    for (let i = 0; i <= num; i++) {
        result += i
    }
    return result
}

console.log(summation(2))

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
function greet() {
    return 'hello world!'
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
    switch (operation) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '/':
            return value1 / value2
        case '*':
            return value1 * value2
        default: 
            return 0
    }
}

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return 180 - a - b;
  }

//   Implement a function which multiplies two numbers.

function multiplyTwoNumbers(a, b) {
    return a * b
}

let multiply = (a, b) => a * b


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    let arr = numbers.split(' ').sort((a, b) => a - b)
    return `${arr[arr.length - 1]} ${arr[0]}`  
}

  console.log(highAndLow("1 9 3 4 -5"))

//   A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
  
    if (n <1) {
      return false;
    } else if (n === 0) {
      return true; 
    } else {
        
    
      let sqt = Math.sqrt(n)
      
  
      if (sqt % sqt.toFixed() === 0) {
          return true;
      } else {
          return false;
      }
    }
  }

console.log(isSquare(25))


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return (x.reduce((acc, current)  => {
        return (acc + Number(current))
    }, 0))
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    // convert speed to km / s
    // convert speed to cm / s
    return Number(Math.floor((s * (100000 / 3600))))
}

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    let dishArr = dish.split('')
    console.log(feast[0])
    console.log(dishArr[0])
    console.log(feast[feast.length - 1])
    console.log(dishArr(dishArr.length - 1))
    return ( (feast[0] === dishArr[0]) && (feast[feast.length - 1] === dishArr[dishArr.length - 1]) )
}

feast("great blue heron", "garlic naan")