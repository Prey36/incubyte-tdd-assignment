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
    expect(add("//[;]\n1;2;3")).toBe(6);

    // Test case 7b: Multi-character custom delimiter enclosed in square brackets
    expect(add("//[***]\n1***2***3")).toBe(6);
});
