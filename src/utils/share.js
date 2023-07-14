/**
 * @typedef {Object} Share
 * @property {boolean} wasShared
 * @property {any} error
 * @property {boolean} wasCopied
 */

/**
 * share data using the navigator, or copy to the clipboard when Abort Error
 * @param {ShareData} data
 * @returns {Promise<Share>}
 */
const share = async (data) => {
  try {
    const canShare = navigator.canShare(data);
    if (!canShare) {
      throw new Error('share do not supported by browser');
    }
    await navigator.share(data);
    return { wasShared: true, error: null, wasCopied: false };
  } catch (error) {
    const { url = '', text = '', title = '' } = data;
    const copyText = `${title}\n${text}\n${url}`;
    await navigator.clipboard.writeText(copyText);
    return { wasShared: false, error, wasCopied: true };
  }
};

export default share;
