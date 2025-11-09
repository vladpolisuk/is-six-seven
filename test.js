const isSixtySeven = require('./index');

console.log('Testing is-sixty-seven package:\n');

// Test cases
const tests = [
  { input: 67, expected: true },
  { input: 66, expected: false },
  { input: 68, expected: false },
  { input: 0, expected: false },
  { input: -67, expected: false },
  { input: 67.0, expected: true },
  { input: 67.5, expected: false },
  { input: '67', expected: false },
  { input: null, expected: false },
  { input: undefined, expected: false },
  { input: NaN, expected: false }
];

tests.forEach(({ input, expected }) => {
  const result = isSixtySeven(input);
  const status = result === expected ? '✓' : '✗';
  console.log(`${status} isSixtySeven(${JSON.stringify(input)}) = ${result} (expected ${expected})`);
});