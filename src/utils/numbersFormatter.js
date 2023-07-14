/**
 * @type {Object<number, String>}
 */
const formats = {
  0: '',
  1: 'K',
  2: 'M',
  3: 'B',
  4: 'T',
};

/**
 * format numbers using 'K', 'M', 'B', 'T' Keywords
 * @param {Number} number
 * @param {String} separator
 * @returns {String}
 */
const numbersFormatter = (number) => {
  const numberString = String(number);
  const formatId = Math.floor(numberString.length / 3);
  const suffixLength = formatId * 3;
  const prefix = (number / 10 ** suffixLength).toFixed(1);
  return parseFloat(prefix) + formats[formatId];
};
export default numbersFormatter;
