/**
 * @typedef {Object} DoctorData
 * @property {String} name
 * @property {String} family
 * @property {String} image
 * @property {Number} viewCount
 * @property {boolean} isBookmarked
 * @property {String} profileUrl
 * @property {String} expertise
 * @property {Number} satisfaction
 * @property {Number} commentsCount
 * @property {Number} waitingTime
 */

/**
 *
 * @returns {Promise<DoctorData>}
 */
export function getDoctorData() {
  return fetch('/profile.json').then((response) => response.json());
}
