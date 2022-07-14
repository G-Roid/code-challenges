// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

        // Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        // Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        // Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

        function longest(s1, s2) {
            let result = []
            let arrayA = s1.split('')
            let arrayB = s2.split('')
        
            console.log(arrayA) 
            console.log(arrayB)
        
            arrayA.forEach(element => {
                if(!result.includes(element)) {
                    result.push(element)
                }
            })
        
            arrayB.forEach(element => {
                if(!result.includes(element)) {
                    result.push(element)
                }
            })
            return String(result.sort().join(''))
        
          }

longest('abc', 'defa')