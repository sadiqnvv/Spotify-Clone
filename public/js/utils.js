/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * Add events on elements
 */
const addEventOnElement = function (elements, eventType, callback) {
  elements.forEach((el) => {
    el.addEventListener(eventType, callback);
  });
};

/**
 * Convert millisecond to time code
 */

const msToTimeCode = (ms) => {
  const /** {number} */ totalSecond = Math.floor(ms / 1000);
  const /** {number} */ sec = totalSecond % 60;
  const /** {number} */ min = Math.floor(totalSecond / 60);

  const /** {string} */ formattedSec = sec.toString().padStart(2, "0")
  const /** {string} */ formattedMin = min.toString().padStart(2, "0")

  return `${formattedMin}:${formattedSec}`
}

export {
  addEventOnElement,
  msToTimeCode
}