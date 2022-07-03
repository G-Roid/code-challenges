// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// // Tests
// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 


function grow(x){

    return x.reduce((acc, current) => {
        return acc * current
    }) 

}

console.log(grow([1, 2, 3]))