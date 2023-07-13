/**
 * @typedef {Object} Share
 * @property {boolean} wasShared
 * @property {any} error
 * @property {boolean} wasCopied
 */

/**
 * share data using the navigator, or copy to the clipboard when Abort Error
 * @param {Object} data
 * @param {string | undefined} data.url
 * @param {string | undefined} data.title
 * @param {string | undefined} data.text
 * @param {File[] | undefined} data.files
 * @returns {Promise<Share>}
 */
const share = async (data) => {
  const { url = '', text = '', title = '', files } = data;
  try {
    await navigator.share({ url, text, title, files });
    return { wasShared: true, error: null, wasCopied: false };
  } catch (error) {
    const copyText = `${title}\n${text}\n${url}`;
    await navigator.clipboard.writeText(copyText);
    return { wasShared: false, error, wasCopied: true };
  }
};

export default share;
