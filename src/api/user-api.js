/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

const { getData } = require("../config/axios-config");
const { getUrlQeury } = require('../utils/helpers-util')

/**
 *
 * @param {Object} req
 * @returns {Object}
 */
const getProfile = async (req) => {
  const { data: currentProfile } = await getData(
    "/me",
    req.cookies.access_token
  );

  return currentProfile;
};

/**
 * @param {Object} req
 * @param {number} itemLimit
 * @returns {Object}
 */
const getTopArtist = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQeury(req.params, itemLimit)
  const { data: topArtist } = await getData(
    `/me/top/artists?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );

  const baseUrl = `${req.baseUrl}/top/artist`

  return { baseUrl, page, ...topArtist };
}


/**
 * 
 * @param {Object} req 
 * @param {Object} itemLimit 
 * @returns {Object}
 */
const getTopTrack = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQeury(req.params, itemLimit)
  const { data: topTrack } = await getData(
    `/me/top/tracks?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );

  const baseUrl = `${req.baseUrl}/top/track`

  return { baseUrl, page, ...topTrack };
}

/**
 * 
 * @param {object} req 
 * @returns {object}
 */
const getFollowedArtist = async (req) => {
  const { data: {artists :followedArtist }} = await getData(
    `/me/following?type=artist`,
    req.cookies.access_token
  );

  return followedArtist
}

module.exports = {
  getProfile,
  getTopArtist,
  getTopTrack,
  getFollowedArtist
};
