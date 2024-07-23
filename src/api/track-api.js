/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

const {
  getData,
  musixmatchApi
} = require("../config/axios-config");
/**
 *
 * @param {Object} req
 * @param {Object} trackSpeed
 * @param {number} itemLimit
 * @returns {Object}
 */
const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
  const {
    data: { tracks: recommendedTrack },
  } = await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token);


  return recommendedTrack
};


/**
 * 
 * @param {Object} req
 * @returns {Object} 
 */
const getDetail = async (req) => {

  const { trackId } = req.params
  const { data: trackDetail } = await getData(`/tracks/${trackId}`, req.cookies.access_token)

  return trackDetail;
}

/**
 * 
 * @param {string} trackName 
 * @param {string} artistName 
 * @param {string|null} [isrc=null] 
 * @returns {string} isrc 
 */
const getLyrics = async (trackName, artistName, isrc = null) => {
  const { message: { body: { lyrics } } } = await musixmatchApi('matcher.lyrics.get?', {
    q_track: trackName.toLowerCase(),
    q_artist: artistName.toLowerCase(),
    track_isrc: isrc
  })
  
  return lyrics;
}

module.exports = {
  getRecommendedTrack,
  getDetail,
  getLyrics
}