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
const { albums, albumDetail } = require("../controllers/album-controller")

router.get('/', albums)
router.get('/page/:page', albums)

router.get('/:albumId', albumDetail)

module.exports = router