/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

const cookies = new Map(document.cookie.split("; ").map(item => item.split("=")));

const BASE_URL = "https://api.spotify.com/v1";



const headers = {
    "Authorization": `Bearer ${cookies.get("access_token")}`,
    "Content-Type": "application/json"
}

/**
 * 
 * @param {string} device_id 
 * @param {Boolean} play 
 */
const transferPlayback = async (deviceId, play = false) => {
    try {
        const reqBody = { device_ids: [deviceId], play }
        await fetch(`${BASE_URL}/me/player`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(reqBody)
        });
    } catch (err) {
        console.log(err);

    }
}

/**
 * @param {string} deviceId
 * @param {object} reqBody
 */
const play = async (deviceId, reqBody) => {
    try {
        const response = await fetch(`${BASE_URL}/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(reqBody)
        })
    } catch (err) {
        console.log(err);

    }
}

export {
    cookies,
    transferPlayback,
    play
}