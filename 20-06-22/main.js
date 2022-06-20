// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
    //Parameters
        //values: begin, end, step (inclusive)
    //Return
        //Integer
    //Edge
        //    assert.strictEqual(sequenceSum(2, 6, 2), 12)
        //assert.strictEqual(sequenceSum(1, 5, 1), 15)
        //assert.strictEqual(sequenceSum(1, 5, 3), 5) 
    //Psuedo
        // set result = begin
        // while (result < end)
            // result += step
        // return result
    let result = begin
    let add = step
    while (add < end) { 
        add = (result + add)      
        result += add
        console.log(result)
        
    } 
    return result
};

// sequenceSum(1, 5, 1)
// console.log('')
// sequenceSum(1, 5, 3)

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

function findNeedle(haystack) {
    let result 
    
    haystack.forEach((element, index) => {
        if (element === 'needle'){
            result = index
        }   
    });
    return (result >= 0) ? `found the needle at position ${result}` : undefined

}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

console.log(findNeedle(haystack_1))
