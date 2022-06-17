// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.




function areYouPlayingBanjo(name) {  
    
    return (name.split('')[0].toLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;

    // console.log(name.split('')[0].toLowerCase())

    // if ( (name.split('')[0].toLowerCase() === 'r') )
    // {
    //    return `${name} plays banjo` 
    // }
    
    // return `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('mick'))