// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

    //P
        // postive integer
    //R
        // return a intefer -> divisors of n
    //E
        // Test.assertEquals(getDivisorsCnt(1) , 1);
        // Test.assertEquals(getDivisorsCnt(10) , 4);
        // Test.assertEquals(getDivisorsCnt(11) , 2);
        // Test.assertEquals(getDivisorsCnt(54) , 8);
    //P
        // let counter = 0
        // loop from i = 1 to n <= n
            // if n % i = 0 
                // counter ++
        // return counter

function getDivisorsCnt(n){
    let counter = 1
    
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            counter++
            // console.log(counter)
        }
    }
    return counter
}

// console.log(getDivisorsCnt(3))
// console.log(getDivisorsCnt(5))
    console.log(getDivisorsCnt(12))
// console.log(getDivisorsCnt(30))


