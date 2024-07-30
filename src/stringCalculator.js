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
    let delimiter = /[,\n]/; // Default delimiter is comma or newline
    let start = 0;

    // Check if the input starts with custom delimiter specification
    if (numbers.startsWith("//")) {
        delimiter = numbers[2]; // Extract custom delimiter
        start = 3; // Move past the delimiter specification
    }
    let ans = 0,temp_ans=0;   

    // Iterate through the string, assuming numbers are separated by delimiters
    for (let charindex = start; charindex < numbers.length; charindex++) {
        if(numbers[charindex] == ',' || numbers[charindex] == '\n'|| numbers[charindex] === delimiter){
            ans+=temp_ans;
            temp_ans = 0;
            continue
        }
        let number_at_charindex = numbers[charindex];
        temp_ans =  temp_ans*10 + parseInt(number_at_charindex, 10); 
    }
    ans+=temp_ans;
    return ans;
}

module.exports = { add };