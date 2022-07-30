function pyramid(n, a, d) {
    let currentValue = a

    
    let result = []

    for (let i = 0; i < n; i++) {
        let row = []
        for(let j = 0; j <= i; j++) {
            row.push(currentValue)
            currentValue += d
        }
        result.push(row)
    }

    return result
}

function sumRow(multArray, n) {
    return multArray[n - 1].reduce((previous, current) => {
        return previous + current
    })
}

// console.log(pyramid(3, 1, 2))

console.log(sumRow(pyramid(3, 1, 2), 2))
