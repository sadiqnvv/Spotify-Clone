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
 * @returns {Object} 
 */
const getAll = async (req) => {
    const { query } = req.params

    const { data: searchAll } = await getData(`/search?q=${query}&type=track,album,artist,playlist&limit=12`, req.cookies.access_token)

    return searchAll
}

/**
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getAlbum = async (req) => {
    const { offset, limit, page } = getUrlQeury(req.params);
    const { query } = req.params

    const { data: { albums: searchAlbum } } = await getData(`/search?q=${query}&type=album&limit=${limit}&offset=${offset}`, req.cookies.access_token)

    const baseUrl = `${req.baseUrl}/albums/${query}`

    return { baseUrl, page, ...searchAlbum }
}

/**
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getArtist = async (req) => {
    const { offset, limit, page } = getUrlQeury(req.params);
    const { query } = req.params

    const { data: { artists: searchArtist } } = await getData(`/search?q=${query}&type=artist&limit=${limit}&offset=${offset}`, req.cookies.access_token)

    const baseUrl = `${req.baseUrl}/artists/${query}`

    return { baseUrl, page, ...searchArtist }
}

/**
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getPlaylist = async (req) => {
    const { offset, limit, page } = getUrlQeury(req.params);
    const { query } = req.params

    const { data: { playlists: searchPlaylist } } = await getData(`/search?q=${query}&type=playlist&limit=${limit}&offset=${offset}`, req.cookies.access_token)

    const baseUrl = `${req.baseUrl}/playlists/${query}`

    return { baseUrl, page, ...searchPlaylist }
}

/**
 * 
 * @param {Object} req 
 * @param {Number} itemLimit
 * @returns {Object}
 */
const getTrack = async (req, itemLimit) => {
    const { offset, limit, page } = getUrlQeury(req.params, itemLimit);
    const { query } = req.params

    const { data: { tracks: searchTrack } } = await getData(`/search?q=${query}&type=track&limit=${limit}&offset=${offset}`, req.cookies.access_token)

    const baseUrl = `${req.baseUrl}/tracks/${query}`

    return { baseUrl, page, ...searchTrack }
}

module.exports = { getAll, getAlbum, getArtist, getPlaylist, getTrack }