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

const { explore, exploreDetail } = require("../controllers/explore-controller");


router.get(["/", '/page/:page'], explore)

// Можно и так отдельно писать это одно и то же

// router.get("/", explore)
// router.get('/page/:page', explore)

router.get(["/:cotegoryId", "/:cotegoryId/page/:page"], exploreDetail)


module.exports = router