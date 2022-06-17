function countPositivesSumNegatives(input) {
    
    let positiveSum = 0;
    let negativeSum = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveSum += input[i]
      } else if (input[i] < 0) {
        negativeSum += input[i]
      } 
    }
    return [positiveSum, negativeSum]
  }

  let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  let actual = countPositivesSumNegatives(testData);

  console.log(countPositivesSumNegatives(actual))