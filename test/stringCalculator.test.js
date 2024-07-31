// Import the add function from the stringCalculator module
const { add } = require('../src/stringCalculator');

// Test case 1: Check if the add function returns 0 for an empty string
test('it should return 0 if input is an empty string', () => {
    // test case 1 when empty string pass to add function
    expect(add("")).toBe(0);
});


// Test case 2: Check if the add function returns the number itself for a single number
test('should return the number itself for a single number', () => {
    // Test case 2a: When the input is "1"
    expect(add("1")).toBe(1);
    // Test case 2b: When the input is "5"
    expect(add("5")).toBe(5);
});

// Test case 3: Check if the add function returns the correct sum for comma-separated numbers
test('should return the correct sum for comma-separated numbers', () => {
    // Test case 2a: When the input is "1,2", the sum should be 3
    expect(add("1,2")).toBe(3);
    // Test case 2b: When the input is "5,6", the sum should be 11
    expect(add("5,6")).toBe(11);
});

// Test case 4: Check if the add function correctly handles new lines between numbers
test('should handle new lines between numbers', () => {
    // Test case 3a: When the input is "1\n2,3", the sum should be 6
    expect(add("1\n2,3")).toBe(6);

    // Test case 3b: When the input is "10\n20\n30", the sum should be 60
    expect(add("1\n2\n3")).toBe(6);
});

// Test case 5: Check if the add function correctly handles multi-digit numbers with mixed delimiters
test('should handle multi-digit numbers with mixed delimiters', () => {
    // Test case 5a: When the input is "12,25\n7", the sum should be 44
    expect(add("12,25\n7")).toBe(44);

    // Test case 5b: When the input is "100\n200,300", the sum should be 600
    expect(add("100\n200,300")).toBe(600);

    // Test case 5c: When the input is "1,22,333\n444", the sum should be 800
    expect(add("1,22,333\n444")).toBe(800);
});

// Test case 6: Custom delimiter ";" with numbers separated by ";"
test('should handle custom delimiter ";"', () => {
    // Test case 6a: When the input is "//;\n1;2", the sum should be 3
    expect(add("//;\n1;2")).toBe(3);  // 1 + 2 = 3
});

// Test case 7: Check if the add function correctly handles custom multi-character delimiters with different formats
test('should handle custom multi-character delimiters with different formats', () => {
    // Test case 7a: Single custom delimiter enclosed in square brackets
    // Input: "//[;]\n1;2;3"
    // Expected output: 6 (1 + 2 + 3 = 6)
    expect(add("//[;]\n1;2;3")).toBe(6);

    // Test case 7b: Multi-character custom delimiter enclosed in square brackets
    // Input: "//[***]\n1***2***3"
    // Expected output: 6 (1 + 2 + 3 = 6)
    expect(add("//[***]\n1***2***3")).toBe(6);

    // Test case 7c: Custom delimiter with multiple characters in brackets and mixed delimiters
    // Input: "//[abc][de]\n1abc2de3"
    // Expected output: 6 (1 + 2 + 3 = 6)
    expect(add("//[abc][de]\n1abc2de3")).toBe(6);

    // Test case 7d: Custom delimiter with multiple characters and mixed brackets
    // Input: "//[;;][%%]\n1;;2%%3"
    // Expected output: 6 (1 + 2 + 3 = 6)
    expect(add("//[**][%%]\n1**2%%3")).toBe(6);
});


// Test case 8: Check if the add function throws an exception for negative numbers
test('should throw an exception for negative numbers', () => {
    // Test case 8a: Single negative number
    // Input: "1,-2,3"
    // Expected output: Error with message "Negative numbers not allowed: -2"
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});


// Test case 9: Delimiter as a negative sign with negative numbers
test('should throw error for negative numbers when delimiter is "-"', () => {
    // Using "-" as the delimiter between numbers and including a negative number
    expect(() => add("//-\n1-2-3-4-5-6-7-8-9--10--15")).toThrow("Negative numbers not allowed: -10, -15");
});


// Test case 10: Check if numbers greater than 1000 are ignored
test('should ignore numbers greater than 1000', () => {
    expect(add("1000,2000,3000")).toBe(1000); // 2000 and 3000 are ignored
    expect(add("999,1001,500")).toBe(1499); // 1001 is ignored
});


// New test case 11: Invalid input with missing numbers between delimiters
test('should throw an error for missing numbers between delimiters', () => {
    expect(() => add("1,,2")).toThrow("Invalid input format");
    expect(() => add("1,\n2")).toThrow("Invalid input format");
    expect(() => add("1\n,2")).toThrow("Invalid input format");
});