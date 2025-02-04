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
 * @returns {String}
 */
const numbersFormatter = (number) => {
  const numberString = String(number);
  const { length: numberLength } = numberString;
  const formatId = Math.floor((numberLength - 1) / 3);
  const suffixLength = formatId * 3;
  const prefix = (number / 10 ** suffixLength).toFixed(1);
  return parseFloat(prefix) + formats[formatId];
};
export default numbersFormatter;
