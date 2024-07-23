/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

const apiConfig = require("../config/api-config");
const { param } = require("../routes/login-router");

/**
 *
 * @param {number} length
 * @returns {string}
 */
const generateRandomString = function (length) {
  let /** {string | underfined} */ randomString = "";
  const /** {string} */ possibleLetters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length - 1; i++) {
    const /** {number} */ randomIndex = Math.floor(
        Math.random() * possibleLetters.length
      );
    randomString += possibleLetters[randomIndex];
  }

  return randomString;
};

/**
 *
 * @param {Object} params
 * @param {number} limit
 * @param {number} [limit = apiConfig.DEFAULT_LIMIT]
 * @returns {Object}
 */
const getUrlQeury = (params, limit = apiConfig.DEFAULT_LIMIT) => {

 const {page = 1} = params;
 const /** {number} */ offset = (limit * page) - limit;

 return {limit, offset, page};
};

const msToTimeCode = (ms) => {
  const /** {number} */ totalSecond = Math.floor(ms / 1000);
  const /** {number} */ sec = totalSecond % 60;
  const /** {number} */ min = Math.floor(totalSecond / 60);

  const /** {string} */ formattedSec = sec.toString().padStart(2, "0")
  const /** {string} */ formattedMin = min.toString().padStart(2, "0")

  return `${formattedMin}:${formattedSec}`
}

module.exports = {
  generateRandomString,
  getUrlQeury,
  msToTimeCode
};
