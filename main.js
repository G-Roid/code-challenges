// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  //sort the numbers
  let sortedArray = arr.sort((a, b) => {
    return a - b
  })

  // let sum = sortedArray.reduce((previous, current) => {
  //   return previous + current
  // })

  let between = 0
  for(let i = sortedArray[0]; i <= sortedArray[1]; i++) {
    between += i
  }

  // console.log(sortedArray)
  // console.log(sum)
  // console.log(between)
  return between

}
// console.log(sumAll([1, 4]))
sumAll([1, 4]);

function refined(arr) {
  let min = Math.min(arr[0], arr[1])
  let max = Math.max(arr[0], arr[1])

  let result = 0;
  for(let i = min; i <= max; i++) {
    result += i
  }
  return result
}

