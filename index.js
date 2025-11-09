/**
 * Checks if a number is equal to 67
 * @param {number} num - The number to check
 * @returns {boolean} True if the number equals 67, false otherwise
 */
function isSixtySeven(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    return false;
  }
  return num === 67;
}

module.exports = isSixtySeven;
module.exports.default = isSixtySeven;