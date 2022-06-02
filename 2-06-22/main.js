// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length == 0) return 0
  
    let sum = array.reduce((acc, current) => {
        return acc + current
    }, 0)

    return (sum / array.length)
}

function refactored(arr) {
    arr.length === 0 ? 0 : arr.reduce((acc, current) => acc + current) / arr.length
}


console.table(find_average([1, 2, 3, 4]))
console.log(refactored([1, 2, 3, 4]))