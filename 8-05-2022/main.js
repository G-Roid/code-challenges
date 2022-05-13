// function sumArray(array) {
  
//     if (array === null) {
//       return 0;
//     }  else if (array.length === 0 || array.length === 1 || array.length === 2) {
//       return 0
//     } else {
//         let max = Math.max(...array)
//         let min = Math.min(...array)

  
//         let sum = array.reduce((a, b) => {
//           return a + b;
//         })
//         sum = sum - max - min;
//         return sum    
//     }
// }



// console.log(Math.max(...[ 6, 2, 1, 8, 10 ]))



function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }


function addArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length <= 2) {
        return 0;
    } else {
        array = array.sort((a, b) => {
            return a - b;
        })
        let total = 0;
        for (let i = 1; i < array.length - 1; i++) {
            total += array[i]

        }
        return total;
    }
}

let arr = [ 6, 2, 1, 8, 10 ]

console.log(addArray(arr))