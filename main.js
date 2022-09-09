// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// Tests
// Waiting:uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// Waiting:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// Waiting:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// Waiting:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// Waiting:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

function uniteUnique(arr) {
  let result = []
  for(let i = 1; i < arguments.length - 1; i++) {
      result.push(onlyUnique(arguments[i], arguments[i + 1]))
  }

  let joinedArr = [];
  result.forEach(el => {
    for(let i = 0; i < el.length; i++) {
      joinedArr.push(el[i])
    }
  })

  let firstArrSet = new Set(arguments[0]);

  let finalArray = Array.from(firstArrSet).concat(joinedArr)
  
  // console.log(result)
  // console.log(firstArrSet)
  // console.log(finalArray)
  return finalArray;
}



function onlyUnique(arr1, arr2) {
  let result = []

  for(let i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i])) {
      result.push(arr1[i])
    }
  }
  return result
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));