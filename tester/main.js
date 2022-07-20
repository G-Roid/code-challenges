// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line

//   s[0] = 2
//   s[2] = 5 
//   return s

//   // Only change code above this line
// }
// console.log(editInPlace());

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    
    for (let i = 0; i < 3; i++) {
      let element = `<li class="text-warning">${arr[i]}</li>'`
      failureItems.push(element)
    }
  
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList)