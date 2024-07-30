
/**
 * Function to sum all numbers in a string.
 * 
 * @param {string} numbers - A string containing numbers separated by delimiters.
 * @returns {number} The sum of the numbers. If the input is an empty string, returns 0.
 */
function add(numbers) {
    // Check if the input string is empty
    if(numbers == "")
        return 0;
    var ans=0

    let ans = 0; // Initialize a variable to store the sum of numbers
    
    // Iterate through the string, assuming numbers are separated by delimiters
    for (let i = 0; i < numbers.length; i += 2) {
        let t = numbers[i]; // Get the character at the current index
        ans += parseInt(t, 10); // Convert the character to an integer and add it to the sum
    }
    return ans;
}

module.exports = { add };
