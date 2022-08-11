
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/


//PREP
    //P
        //array on integers min length 2
        //target number - integer
    //R
        // Tuple of numbers => size of 2 and the sum is equal to the target number
    //E
        //Edge
            //?
    //Psuedo Code
        /*

        let result = Set(index[0], index[1])
        if (index[0] + index[1] == target)
        {
            return result
        } else {
            if (let i = 2; i < input.length; i++) {
                if (result[0] + input[i]) == target ){
                    result[1] = input[i]
                    return
                } else {
                    other number
                }
            }
            return result
        }

        */

function twoSum(numbers, target) {

    let result = new Set()

    numbers.forEach((element, index) => {
        if (result.size != 2) {
            let difference = target - element
            if (numbers.includes(difference)) {
                result.add(index)
                result.add(numbers.indexOf(difference))
                return
            }
        }
    })
    return Array.from(result)  
  }


function slim(numbers, target) {

    for(let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [numbers[i], numbers[j]]
            }
        }
    }

}



console.log('slim version')
console.log(slim([4, 5, 6, 3], 9))