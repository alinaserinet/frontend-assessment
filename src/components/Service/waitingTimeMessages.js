/**
 * @typedef {Object} WaitingTimeMessage
 * @property {string} en
 */

import { messages } from '../../variables/en';

/**
 * @type {Object<number, WaitingTimeMessage>}
 */
const waitingTimeMessages = {
  0: { en: messages.WAITING_LESS_1H },
  1: { en: messages.WAITING_MORE_1H },
  2: { en: messages.WAITING_LESS_2H },
  3: { en: messages.WAITING_MORE_2H },
};

export default waitingTimeMessages;

/**
 * return a waiting-time-text according to waiting-time-value
 * @param {number} waitingTime
 * @returns {string}
 */
export const getWaitingTimeText = (waitingTime) => {
  return waitingTimeMessages[waitingTime]?.en || '';
};
