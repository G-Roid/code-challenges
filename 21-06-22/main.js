// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5


//Paramaters
    //List
//Return
    // max and min integers
//Edge
    // Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    // Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    // Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    // Test.assertEquals(max([5]), 5);
//Psuedo Code

var min = function(list){
    let result = list[0]

   list.forEach(element => {
       if (element < result) result = element
   })
   return result
}

var max = function(list){
    let result = list[0]

    list.forEach(element => {
        if (element > result) result = element
    })
    return result
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))