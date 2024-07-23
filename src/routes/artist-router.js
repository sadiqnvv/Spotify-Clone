/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * node modules
 */

const router = require("express").Router();

/**
 * custom modules
 */

const { artistDetail, artistAlbum } = require("../controllers/artist-controller");

router.get('/:artistId', artistDetail);
router.get(['/:artistId/album', '/:artistId/album/page/:page'], artistAlbum);

module.exports = router