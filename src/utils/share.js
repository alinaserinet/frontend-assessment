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
  const { url = '', text = '', title = '', files } = data;
  try {
    const canShare = navigator.canShare({ url, text, title, files });
    if (!canShare) {
      throw new Error('share don not supported by browser');
    }
    await navigator.share({ url, text, title, files });
    return { wasShared: true, error: null, wasCopied: false };
  } catch (error) {
    const copyText = `${title}\n${text}\n${url}`;
    await navigator.clipboard.writeText(copyText);
    return { wasShared: false, error, wasCopied: true };
  }
};

export default share;
