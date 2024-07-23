/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */
const { getData } = require("../config/axios-config");
const apiConfig = require("../config/api-config");
const { getUrlQeury } = require("../utils/helpers-util");


/**
 * 
 * @param {Object} req 
 * @param {string} artistIds
 * @returns {Object} 
 */
const getSeveralDetail = async (req, artistIds) => {
    const { data: trackArtists } = await getData(`/artists?ids=${artistIds}`, req.cookies.access_token);

    return trackArtists
}


/**
 * @param {Object} req
 * @param {number} itemLimit
 * @param {string} id
 * @returns {Object}
 */
const getAlbum = async (req, itemLimit, id) => {
    const { offset, limit, page } = getUrlQeury(req.params, itemLimit)

    const { artistId = id } = req.params
    const { data: artistAlbum } = await getData(`/artists/${artistId}/albums?limit=${limit}&offset=${offset}`, req.cookies.access_token)

    const /** {string} */ baseUrl = `${req.baseUrl}/${artistId}/album`

    return { baseUrl, page, ...artistAlbum }
}

/**
 * 
 * @param {Object} req
 * @returns {Object} 
 */
const getDetail = async (req) => {
    const { artistId } = req.params

    const { data: artistDetail } = await getData(`/artists/${artistId}`, req.cookies.access_token)

    return artistDetail
}

/**
 * 
 * @param {Object} req 
 * @param {String} id
 * @returns {Object} 
 */
const getTopTracks = async (req, id) => {
    const { artistId = id } = req.params

    const { data: artistTopTracks } = await getData(`/artists/${artistId}/top-tracks?market=${apiConfig.MARKET}`, req.cookies.access_token)

    return artistTopTracks
}

/**
 * 
 * @param {object} req
 * @param {string} id 
 * @returns {object}
 */
const getRelated = async (req, id) => {
    const { artistId = id } = req.params

    const { data: relatedArtists } = await getData(`/artists/${artistId}/related-artists`, req.cookies.access_token)

    // artists/1oXUyB2Rs4PMs6cTpAiJyy/related-artists
    return relatedArtists
}

module.exports = {
    getSeveralDetail,
    getAlbum,
    getDetail,
    getTopTracks,
    getRelated
}