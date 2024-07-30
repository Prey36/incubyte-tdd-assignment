
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

    let ans = 0;   
    // Iterate through the string, assuming numbers are separated by delimiters
    for (let charindex = 0; charindex < numbers.length; charindex++) {
        if(numbers[charindex] == '\n'){
            continue
        }
        if(numbers[charindex] == ','){
            continue
        }
        console.log(numbers[charindex])
        let number_at_charindex = numbers[charindex];
        console.log(number_at_charindex);
        ans += parseInt(number_at_charindex, 10); 
    }
    return ans;
}

module.exports = { add };
