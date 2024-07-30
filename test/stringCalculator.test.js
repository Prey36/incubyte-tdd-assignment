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
