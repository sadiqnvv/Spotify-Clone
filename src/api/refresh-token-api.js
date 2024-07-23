/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

const axiosConfig = require("../config/axios-config");

/**
 *
 * @param {string} refreshToken
 * @returns {Object}
 */
const getRefreshToken = async (refreshToken) => {
  try {
    const response = await axiosConfig.token.post("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getRefreshToken };
