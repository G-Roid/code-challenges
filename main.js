// JavaScript Algorithms and Data Structures
// Intermediate Algorithm Scripting
// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const alphStr = "abcdefghijklmnopqrstuvwxyz";
  const alphaArray = alphStr.split('');
  // console.log(alphaArray)
  // console.log(alphaArray.indexOf('c'))

  let startIndex = alphaArray.indexOf(str[0]);
  let alphaSubArray = alphaArray.slice(startIndex, startIndex + str.length)
  
  console.log(`Position: ${startIndex}`)
  console.log(alphaSubArray)

  return missingOne(str, alphaSubArray)

}

function missingOne(str, comp) {
  let result = undefined;
  for(let i = 0; i < comp.length; i++) {
    if(!str.includes(comp[i])) {
      result = comp[i];
      break;
    }
  }
  return result;
}

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"))
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("stvwx"))