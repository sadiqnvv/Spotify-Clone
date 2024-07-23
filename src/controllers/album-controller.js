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
const albumApi = require('../api/album-api')
const artistApi = require('../api/artist-api')
const apiConfig = require('../config/api-config')
const { msToTimeCode } = require('../utils/helpers-util')

const albums = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // new release albums
    const newRelease = await albumApi.getNewRelease(req)

    res.render('./pages/album', {
        title: 'New Release',
        currentProfile,
        recentlyPlayedTracks,
        albums: newRelease
    })
}

const albumDetail = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // get album detail
    const albumDetail = await albumApi.getAlbumDetail(req)

    // more by artist
    const [firstArtist] = albumDetail.artists;
    const moreByArtist = await artistApi.getAlbum(req, apiConfig.LOW_LIMIT, firstArtist.id)

    res.render('./pages/album-detail', {
        currentProfile,
        recentlyPlayedTracks,
        albumDetail,
        moreByArtist: { firstArtist, ...moreByArtist },
        msToTimeCode
    })

}


module.exports = {
    albums,
    albumDetail
}