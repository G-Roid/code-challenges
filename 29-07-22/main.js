// DESCRIPTION:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

function fibSequence(n) {

    console.log('choice')
    let n1 = 0;
    let n2 = 1;

    let result = [n1, n2]

    if (n < 3) {
        switch (n) {
            case 1:
                return [n1];
            case 2:
                return [n1, n2];
        }

    } else {
    
        for(let i = 2; i < n; i++) {
            let tmp = n1 + n2
            n1 = n2
            n2 = tmp
            result.push(tmp)
            // console.log(tmp)

        }

    }
    return result

}


console.log(fibSequence(1))
console.log(fibSequence(2))
console.log(fibSequence(3))
console.log(fibSequence(4))