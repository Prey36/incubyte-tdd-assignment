// Import the add function from the stringCalculator module
const { add } = require('../src/stringCalculator');

// Test case to check if the add function returns 0 for an empty string
test('it should return 0 if input is an empty string', () => {
    // test case 1 when empty string pass to add function
    expect(add("")).toBe(0);
});
