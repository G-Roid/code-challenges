function spinalCase(str) {
    let result = str.split(/\W/)
    if(result.length === 1) {
      result = result[0].split('_')
    }
  
    let checkCamalCase = []
  
  
    result.forEach(element => {
      checkCamalCase.push(mySplit(element).map(el => {
        return el.toLowerCase()
      }))
    })
  
    //combine arrays
    let joined = []
  
    for(let i = 0; i < checkCamalCase.length; i++) {
      for(let j = 0; j < checkCamalCase[i].length; j++) {
        joined.push(checkCamalCase[i][j])
      }
    }
    return joined.join('-')
  }
  
  
  function mySplit(str) {
      let result = str[0]
  
      for(let i = 1; i < str.length; i++) {
         
          if(str.charCodeAt(i) >= 97 && str.charCodeAt(0) <= 122) {
              result += str[i]
          } else {
              result +=  " " + str[i].toLowerCase()
          }
      }
      return (result.split(' '))
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  spinalCase("AllThe-small Things");
  spinalCase("The_Andy_Griffith_Show");