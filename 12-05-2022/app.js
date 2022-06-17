// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    
    classPoints.push(yourPoints)   
    let average = classPoints.reduce((acc, score) => acc + score) / classPoints.length;

    console.log(`Average: ${average}, Score: ${yourPoints}`)

    if (yourPoints > average) {
        return true;
    } else {
        return false;
    }

  }


console.log(betterThanAverage([1, 2, 3], 4))
console.log(aboveTheRest([1, 2, 3], 4))
  

// Version #2

// function aboveTheRest(classPoints, you) {
//     return you > classPoints.reduce((a, b) => a + b) / classPoints.length;
// }