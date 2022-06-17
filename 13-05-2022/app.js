// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {  

    result = array.map(item => item * -1)
    return result
 }

 function invertAndSum(array) {
     let result = array.reduce((acc, item) => {
        return (acc + (-1 * item))
    })
    return result
 }

 