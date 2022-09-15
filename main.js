// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fibNumbers = fibSequence(1000)  
  let result = fibNumbers.filter(el => {
    return (el <= num && el % 2 != 0)
  })

  

  return result.reduce((a, b) => {
    return a + b
  }, 0)
  
}

function fibSequence(n) {
  let numbers = [1, 1]
  if(n == 1) {
    return [1];
  } else if(n == 2) {
    return [1, 1]
  } else {
    
    let cycles = n - 2

    for(let i = 0; i < cycles; i++) {
      let newValue = numbers[numbers.length - 1] + numbers[numbers.length - 2];
      numbers.push(newValue);
    }
    return numbers;
  }
}


console.log(sumFibs(10))