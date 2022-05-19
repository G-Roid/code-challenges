// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c) {
    let checkA = helper(a, b, c)
    let checkB = helper(a, c, b)
    let checkC= helper(b, c, a)

    if (!checkA || !checkB || !checkC) {
        return false;
    } else {
        return true;
    }
}

function helper(i, j, k) {
    return ((i + j) > k) ? true : false;

    // if( (i + j ) > k ) {
    //     return true
    // } 
    // return false;
}


// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }


console.log(helper(2, 4, 5))
console.log(isTriangle(1, 3, 5))

