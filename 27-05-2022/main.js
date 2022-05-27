// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let result = true

    let first = str.split('')    
    let second = ending.split('')

    let cycles = first.length - second.length

    console.log(cycles)
    let j = 0;

    for (let i = cycles; i < first.length; i++) {
        if (first[i] != second[j]) {
            return result = false   
        }
        j++
    }
    return result
 }


solution('abc', 'bc')
solution('sumo', 'omo')

function refactored(str, ending) {
    return str.endsWith(ending)
}

console.log(refactored('abc', 'bc'))
console.log(refactored('sumo', 'omo'))



