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
const searchApi = require('../api/search-api')
const { msToTimeCode } = require('../utils/helpers-util')


const searchRequest = (req, res) => {
    res.redirect(`/search/all/${req.body.query}`)
}

const searchAll = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // search result
    const searcAll = await searchApi.getAll(req)

    res.render('./pages/search', {
        currentProfile,
        recentlyPlayedTracks,
        searcAll,
        query: req.params.query,
        type: 'all',
        msToTimeCode
    })
}

const searchAlbum = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // search album
    const searcAlbum = await searchApi.getAlbum(req)

    res.render('./pages/search-album', {
        currentProfile,
        recentlyPlayedTracks,
        searcAlbum,
        query: req.params.query,
        type: 'albums'
    })
}

const searchArtist = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // search artist
    const searchArtist = await searchApi.getArtist(req)

    res.render('./pages/search-artist', {
        currentProfile,
        recentlyPlayedTracks,
        searchArtist,
        query: req.params.query,
        type: 'artists'
    })
}

const searchPlaylist = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // search playlist
    const searchPlaylist = await searchApi.getPlaylist(req)

    res.render('./pages/search-playlist', {
        currentProfile,
        recentlyPlayedTracks,
        searchPlaylist,
        query: req.params.query,
        type: 'playlists'
    })
}

const searchTrack = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // recently played
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = await recentlyPlayed.items.map(
        ({ track }) => track
    );

    // search track
    const searchTrack = await searchApi.getTrack(req, 50)

    res.render('./pages/search-track', {
        currentProfile,
        recentlyPlayedTracks,
        searchTrack,
        query: req.params.query,
        type: 'tracks',
        msToTimeCode
    })
}

module.exports = { searchRequest, searchAll, searchAlbum, searchArtist, searchPlaylist, searchTrack}