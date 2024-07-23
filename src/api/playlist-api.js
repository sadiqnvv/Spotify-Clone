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
 *
 * @param {Object} req
 * @param {number} itemLimit
 * @returns {Object}
 */
const getFeatured = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQeury(req.params, itemLimit)

  const { data: featuredPlaylist } = await getData(
    `/browse/featured-playlists?limit=${limit}&offset=${offset}`,
    req.cookies.access_token
  );
  return { baseUrl: req.baseUrl, page, ...featuredPlaylist };
};


/**
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getCategoryPlaylist = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQeury(req.params, itemLimit)

  const { cotegoryId = "toplists" } = req.params

  const { data: catPlaylist } = await getData(`/browse/categories/${cotegoryId}/playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const /** {string} */ baseUrl = `${req.baseUrl}/${cotegoryId}`

  return { baseUrl, page, ...catPlaylist }
}

/**
 * 
 * @param {Object} req
 * @returns {Object} 
 */
const getDetail = async (req) => {
  const { playlistId } = req.params;

  const { data: playlistDetail } = await getData(`/playlists/${playlistId}?fields=description,external_urls,followers(total),id,images,name,owner(display_name),tracks(total,items(track(album(images,name),artists,duration_ms,name,id,uri))),type,uri`, req.cookies.access_token);

  return playlistDetail
}


module.exports = {
  getFeatured,
  getCategoryPlaylist,
  getDetail
};
