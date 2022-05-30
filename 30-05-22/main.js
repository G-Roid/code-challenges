// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}  


// function order(words){
//     let sortedArray = []

//     let result = words.split(' ')
//     console.log(result)

//     result.forEach((e, index) => {

//         let newIndex = e.indexOf( '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'  )
//             console.log(newIndex)

//         // console.log(e)
//         if( (e.indexOf( '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'  )) ) {
//             // console.log(e)
//             // let newIndex = e.indexOf( '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'  )
//             // console.log(newIndex)
                    
//         }  else {
//             console.log('lost')
//         }
        
//     })

//     return sortedArray
// }



// console.log(order("is2 Thi1s T4est 3a"))

// function findEindex(w) {
//    w.indexOf('1')
// }

// console.log('new wares')
// console.log(findEindex('hello1'))

// let result = []

// let word = 'apples4'
// let next = 'more1'

// result[1] = 'glue'


// result[ Number(word[(word.indexOf('3' || '4'))]) ] = word

// console.log(next.indexOf('1'))

// console.log(result)


// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


function between(a, b) {
    let array = []

    for (let i = a; i <= b; i++) {
        array.push(i)
    }

    return array;
  }