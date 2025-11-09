# is-six-seven

A simple utility package to check if a number is equal to 67.

## Installation

```bash
npm install is-six-seven
```

## Usage

```javascript
const isSixSeven = require('is-six-seven');

console.log(isSixSeven(67));  // true
console.log(isSixSeven(66));  // false
console.log(isSixSeven(68));  // false
console.log(isSixSeven('67')); // false (only numbers accepted)
```

## API

### isSixSeven(num)

Returns `true` if the number is equal to 67, `false` otherwise.

#### Parameters

- `num` (number): The number to check

#### Returns

- (boolean): `true` if num equals 67, `false` otherwise

## License

MIT