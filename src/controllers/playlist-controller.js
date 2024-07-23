/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */
"use strict";

/**
 * custom modules
 */

const userApi = require('../api/user-api')
const playerApi = require('../api/player-api')
const apiConfig = require('../config/api-config')
const playlistApi = require("../api/playlist-api")
const { msToTimeCode } = require("../utils/helpers-util")

const playlist = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // featured playlists
    const featuredPlaylist = await playlistApi.getFeatured(req, apiConfig.DEFAULT_LIMIT)

    res.render('./pages/playlist', {
        currentProfile,
        recentlyPlayedTracks,
        featuredPlaylist
    })


}

const playlistDetail = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // get playlist detail
    const playlistDetail = await playlistApi.getDetail(req)

    res.render('./pages/playlist-detail', {
        currentProfile,
        recentlyPlayedTracks,
        playlistDetail,
        msToTimeCode
    })

}

module.exports = {
    playlist,
    playlistDetail
}