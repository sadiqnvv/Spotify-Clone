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

const { auth, callback } = require("../controllers/auth-controller");
const { refreshToken } = require("../controllers/refresh-token-controller");
router.get("/", auth);
router.get("/callback", callback);
router.get("/refresh_token", refreshToken);

module.exports = router;
