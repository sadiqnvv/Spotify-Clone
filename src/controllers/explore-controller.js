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
const categoryApi = require('../api/category-api')
const playlistApi = require("../api/playlist-api")

const explore = async (req, res) => {

    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );


    // get several categories
    const categories = await categoryApi.getSeveralDetail(req)

    res.render("./pages/explore", {
        currentProfile,
        recentlyPlayedTracks,
        categories
    })
}

const exploreDetail = async (req, res) => {

    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // get category detail
    const catInfo = await categoryApi.getDetail(req)

    // get category playlist
    const catPlaylist = await playlistApi.getCategoryPlaylist(req)

    res.render("./pages/explore-detail", {
        currentProfile,
        recentlyPlayedTracks,
        catInfo,
        catPlaylist
    })


}

module.exports = {
    explore,
    exploreDetail
}