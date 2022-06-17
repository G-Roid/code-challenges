// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
// Examples
// [1, 2, 5, 6, 5, 2]  -->  2
// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
// ...because there are 4 pairs: 2, 20, 6 and 2 (again)

function duplicates(array){
    let numbers = {}
    let tally = 0

    if (array.length == 0 || array.length == 1) return 0
    
    //loop through each element
    array.forEach(element => {
        if (!numbers[element]) {
            numbers[element] = 1
        } else {
            numbers[element]++
        }

    })
    for (const i in numbers) {
        // console.log(Number (Math.floor((numbers[i] / 2))))
        tally += Number (Math.floor((numbers[i] / 2)))
    }
    return tally
    

    //if element is not in tally add it

    //else ++ for the tally

    // divide each tally by 2 and round down

    // return the sum of the divided tally
}

console.log(duplicates([1, 2, 5, 6, 5, 2]))