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
const numbersFormatter = (number, separator = '.') => {
  const numberStr = String(number);
  const rightZerosCount = numberStr.match(/0*$/)?.[0].length;
  const formatId = Math.round(rightZerosCount / 3);
  const formatSuffix = formats[formatId] || '';
  const lastRestIndex = numberStr.length - formatId * 3;
  const rest = numberStr.substring(0, lastRestIndex);
  const firstSuffixChar = numberStr.charAt(lastRestIndex);
  if (firstSuffixChar !== '0' && formatSuffix !== '') {
    return rest + separator + firstSuffixChar + formatSuffix;
  }
  return rest + formatSuffix;
};
export default numbersFormatter;
