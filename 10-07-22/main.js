// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  let arr = String(n).split('')
  // console.log(arr)
  let numberArray = arr.map(element => {
    return Number(element)
  })
  let sortedArray = numberArray.sort((a, b) => {
    return b - a
  })
  // console.log(sortedArray)
  return (Number(sortedArray.join('')))
}

console.log(descendingOrder(42145))