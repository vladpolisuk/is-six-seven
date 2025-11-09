# is-sixty-seven

A simple utility package to check if a number is equal to 67.

## Installation

```bash
npm install is-sixty-seven
```

## Usage

```javascript
const isSixtySeven = require('is-sixty-seven');

console.log(isSixtySeven(67));  // true
console.log(isSixtySeven(66));  // false
console.log(isSixtySeven(68));  // false
console.log(isSixtySeven('67')); // false (only numbers accepted)
```

## API

### isSixtySeven(num)

Returns `true` if the number is equal to 67, `false` otherwise.

#### Parameters

- `num` (number): The number to check

#### Returns

- (boolean): `true` if num equals 67, `false` otherwise

## License

MIT