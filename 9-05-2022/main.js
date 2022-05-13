function solution(number){
    let multiplesArray = [];
    
    for (let i = 1; i < number; i++) {
      let div3 = i % 3;
      let div5 = i % 5;
      
      if(div3 === 0 || div5 === 0) {
        multiplesArray.push(i);
      }
    }
    let sum = 0;
    for (let i = 0; i < multiplesArray.length; i++) {
      sum += multiplesArray[i];
    }
    console.log(multiplesArray)
    return sum;
  }

  console.log(solution(10))