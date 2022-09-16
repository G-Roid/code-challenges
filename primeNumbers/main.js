function isPrime(n) {
    let flag = true

    if(n == 1) {
        return false
    }
    else if(n == 2) {
        return false
    } else {

        for(let i = 2; i < n - 1; i++) {
            if(n % i == 0) {
                flag = false
            }
        }
    }
    return flag;
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))