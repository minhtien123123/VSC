function biggestIntegerInArray(...input) {
    //Retrict inputs to Integers
    let maxElement = input[0];
    for (let i=1; i<input.length; i++) {
        if (maxElement < input[i]) maxElement = input[i];
    }
    return maxElement;
}

function isPalindrome(inputString) {

    if(inputString.length ===0) return false;

    let inputAsString = String(inputString);

    let reversedString = "";
    for(let i=inputAsString.length-1; i>=0 ; i--) {
        reversedString += inputAsString[i];
    }

    console.log(`Reversed string: ${reversedString}`)

    return inputAsString === reversedString;
}

// console.log(biggestIntegerInArray(20, -5, 10, 5, 1, 0))

console.log(isPalindrome("level"))