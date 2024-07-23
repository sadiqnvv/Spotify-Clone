/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

const { getData } = require("../config/axios-config");
const { getUrlQeury } = require("../utils/helpers-util");

/**
 * @param {Object} req
 * @param {number} itemLimit
 * @returns {Object}
 */
const getNewRelease = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQeury(req.params, itemLimit);

  const {
    data: { albums: newRelease },
  } = await getData(
    `/browse/new-releases?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );

  return { baseUrl: req.baseUrl, page, ...newRelease };
};


/**
 * @param {Object} req
 * @returns {Object} 
 */
const getAlbumDetail = async (req) => {

  const { albumId } = req.params
  const { data: albumDetail} = await getData(`/albums/${albumId}`, req.cookies.access_token);

  return albumDetail
}

module.exports = {
  getNewRelease,
  getAlbumDetail
};
