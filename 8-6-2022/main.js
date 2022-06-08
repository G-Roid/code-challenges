// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");


function ghostBusters(building) {
    if (building.indexOf(' ') == -1) {
      return "You just wanted my autograph didn't you?"
    }
    
    return ( building.split(' ').join('')  )
}
// console.log(ghostBusters('Sky scra per'))

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    // Create empty array
    // Loop through each element
    // If !aeio then push into arry

    let result = []
    
    str.split('').forEach(element => {
        // console.log(element)
        if ( !(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u' || element == 'A' || element == 'E' || element == 'I' || element == 'O' || element == 'U') ) {
            result.push(element)
            // console.log(result)
        }

    })

    return result.join('');
}

console.log(disemvowel('This website is for losers LOL!'))