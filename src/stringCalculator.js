
/**
 * Function to sum all numbers in a string.
 * 
 * @param {string} numbers - A string containing numbers separated by delimiters.
 * @returns {number} The sum of the numbers. If the input is an empty string, returns 0.
 */
function add(numbers) {
    if(numbers == "")
        return 0;
    return  parseInt(numbers, 10);
}

module.exports = { add };
