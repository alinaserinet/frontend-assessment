/**
 * @typedef {Object} WaitingTimeMessage
 * @property {string} en
 */

/**
 * @type {Object<number, WaitingTimeMessage>}
 */
const waitingTimeMessages = {
  0: { en: 'Less than half an hour' },
  1: { en: 'Less than an hour' },
  2: { en: 'Less than two hours' },
  3: { en: 'More than two hours' },
};

export default waitingTimeMessages;
