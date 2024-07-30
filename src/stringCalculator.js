
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
    if(numbers.length==1) return parseInt(numbers, 10);
    if(numbers.length>1) {
        ans = parseInt(numbers[0], 10)+parseInt(numbers[2], 10);
    } // Initialize a variable to store the sum of numbers
    return ans;
}

module.exports = { add };
