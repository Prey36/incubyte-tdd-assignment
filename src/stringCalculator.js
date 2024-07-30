/**
 * Function to sum all numbers in a string.
 * 
 * @param {string} numbers - A string containing numbers separated by delimiters.
 * @returns {number} The sum of the numbers. If the input is an empty string, returns 0.
 */
function add(numbers) {
    // Check if the input string is empty
    if (numbers === "") return 0;

    let start = 0;

    // Check if the input starts with custom delimiter specification
    if (numbers.startsWith("//")) {
        let delimiterEndIndex = numbers.indexOf('\n');
        let delimiterSection = numbers.slice(2, delimiterEndIndex);

        // Handle custom delimiter(s) enclosed in square brackets
        if (delimiterSection.startsWith('[') && delimiterSection.endsWith(']')) {
            delimiterSection = delimiterSection.slice(1, -1); // Remove surrounding brackets

            // Replace each custom delimiter in the numbers string with a comma
            let customDelimiters = delimiterSection.split('][');

            let tempNumbers = numbers.slice(delimiterEndIndex + 1); // Get the part after the delimiter specification

            // Replace each custom delimiter with a comma
            customDelimiters.forEach(delim => {
                tempNumbers = tempNumbers.split(delim).join(',');
            });

            numbers = tempNumbers;
        } else {
            // Single-character delimiter
            let singleDelimiter = delimiterSection;
            numbers = numbers.slice(delimiterEndIndex + 1).split(singleDelimiter).join(',');
        }
        start = 0; // After delimiter specification, start processing from the beginning
    } else {
        // Replace newline with a comma
        numbers = numbers.replace(/\n/g, ',');
    }

    // Initialize variables for summing numbers
    let ans = 0;
    let tempNumber = '';
    let negativeNumbers = []; // Array to collect negative numbers
    // Iterate through the string to handle delimiters and sum the numbers
    for (let charindex = start; charindex < numbers.length; charindex++) {
        const char = numbers[charindex];
        if (char === '-') {
            // Handle multi-digit negative numbers
            let tempNum = '-'; // Start with '-' to indicate negative number
            charindex++;
            while (charindex < numbers.length && (numbers[charindex] >= '0' && numbers[charindex] <= '9')) {
                tempNum += numbers[charindex];
                charindex++;
            }
            // Move back one step to adjust the main loop
            charindex--;

            // Add the negative number to the list
            negativeNumbers.push(parseInt(tempNum, 10));
            tempNumber = ''; // Reset tempNumber
            continue;
        }
        // Check if the current character is a delimiter
        if (char === ',' || char === '\n') {
            if (tempNumber) {
                ans += parseInt(tempNumber, 10);
                tempNumber = '';
            }
        } else {
            // Build the current number from the string
            tempNumber += char;
        }
    }

    // Add the last number to the total if any
    if (tempNumber) {
        ans += parseInt(tempNumber, 10);
    }
    // Throw an error if there are any negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error("Negative numbers not allowed: " + negativeNumbers.join(", "));
    }
    return ans;
}

module.exports = { add };
