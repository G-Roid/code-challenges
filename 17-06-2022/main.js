// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
    //Parameters
        // humanYears is an integer >= 1;
    //Return
        // [humanYears - integer, cat-years - integer, dog-years - integer]
    //Edge
        // humanYears = 1
    //Pseudo code

        // if (humanYears == 1) catYear, dogYears = 15
        // else if (huhumanYear == 2) catYears, dogYears = 24
        // else -> 
            //catYears =  24 + (humanYears - 2) * 4
            //dogYeats = 24 + (humanYears - 2) * 5 

    let result = [0, 0, 0]

    if (humanYears == 1) {
        result[1] = 15
        result[2] = 15
        result[0] = humanYears
    } else if (humanYears == 2) {
        result[1] = 24
        result[2] = 24
        result[0] = humanYears
    } else {
        result[1] = 24 + (humanYears -2) * 4
        result[2] = 24 + (humanYears - 2) * 5
        result[0] = humanYears
    }
    return result
  }

  console.log(humanYearsCatYearsDogYears(1))
  console.log(humanYearsCatYearsDogYears(2))
  console.log(humanYearsCatYearsDogYears(3))
  console.log(humanYearsCatYearsDogYears(10))
  

  