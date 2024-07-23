/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * node modules
 */

const axios = require("axios").default;
const querystring = require("querystring");
/**
 * custom modules
 */

const apiConfig = require("./api-config");

const token = axios.create({
  baseURL: apiConfig.TOKEN_BASE_URL,
  headers: {
    Authorization: `Basic ${Buffer.from(
      apiConfig.CLIENT_ID + ":" + apiConfig.CLIENT_SECRET
    ).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const api = axios.create({ baseURL: apiConfig.BASE_URL });

/**
 *
 * @param {string} apiUrl
 * @param {string} access_token
 * @returns {Promise}
 */

const getData = async (apiUrl, access_token) => {
  try {
    const /** {Promise} */ response = await api.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const musixmatch = axios.create({ baseURL: apiConfig.MUSIXMATCH_BASE_URL })


/**
 * 
 * @param {string} endpoint 
 * @param {object} parameters 
 * @returns {Promise<Object>}
 */
const musixmatchApi = async (endpoint, parameters) => {
  try {
    const apiUrl = `${endpoint}${querystring.stringify(parameters)}&apikey=${apiConfig.MUSIXMATCH_API_KEY}`;
    const response = await musixmatch.get(apiUrl)

    return response.data
  } catch (err) {
    console.log(err);
  }

}
module.exports = {
  token,
  getData,
  musixmatchApi
};
