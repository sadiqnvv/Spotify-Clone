/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

const apiConfig = require("../config/api-config");
const axiosConfig = require("../config/axios-config");

/**
 *
 * @param {string} code
 * @returns {Object}
 */
const getToken = async (code) => {
  try {
    const response = await axiosConfig.token.post("/token", {
      grant_type: "authorization_code",
      code,
      redirect_uri: apiConfig.REDIRECT_URI,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getToken,
};
