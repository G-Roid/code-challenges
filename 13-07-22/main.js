// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


        // Test.assertEquals(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
        // Test.assertEquals(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
        // Test.assertEquals(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

        // Test.assertEquals(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
        // Test.assertEquals(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
        // Test.assertEquals(isAnagram("apple", "pale"), false, 'Same letters, but different count')
        //   });

// write the function isAnagram
var isAnagram = function(test, original) {
    let testArray = test.toLowerCase().split('')
    let originalArray = original.toLowerCase().split('')

    if (testArray.length !== originalArray.length) {
        return false
    }

    for(let i = 0; i < testArray.length; i++) {
        // console.log(`test arryay: ${testArray}`)
        // console.log(`original array: ${originalArray}`)
        if (!originalArray.includes(testArray[i])) {
            return false
        } else {
            // console.log(originalArray.indexOf(testArray[i]))
            originalArray.splice(originalArray.indexOf(testArray[i]),1)
        }
    }
    return true
};


console.log(isAnagram('foefet', 'toffee'))
console.log(isAnagram('tacocat', 'tacocat'))