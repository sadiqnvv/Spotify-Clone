/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */
"use strict";

/**
 * node modules
 */

const cors = require("cors");
const cookieParser = require("cookie-parser");

/**
 * custom modules
 */
const login = require("./src/routes/login-router");
const auth = require("./src/routes/auth-router");
const authenticatedUser = require("./src/middlewares/auth-user-middleware");
const home = require("./src/routes/home-router");
const explore = require('./src/routes/explore-router')
const album = require('./src/routes/album-router')
const playlist = require('./src/routes/playlist-router')
const profile = require('./src/routes/profile-router')
const search = require('./src/routes/search-router')
const artist = require('./src/routes/artist-router')
const track = require('./src/routes/track-router')
const logout = require('./src/routes/logout-router')


// Initial express app
const express = require("express");
const app = express();
const PORT = 3000;

/**
 * EJS setting
 */
app.set("view engine", "ejs");

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Enable cors & cokie parser
 */
app.use(cors()).use(cookieParser());

/**
 * Encode post request body
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Login Page
 */
app.use("/login", login);

/**
 * Auth page
 */
app.use("/auth", auth);

/**
 * Check user is authenticated
 */
app.use(authenticatedUser);

/**
 * Logout
 */
app.use('/logout', logout)

/**
 * Home page
 */
app.use("/", home);

/**
 * Explore page
 */
app.use("/explore", explore)


/**
 * Album page
 */
app.use("/album", album)


/**
 * Playlist page
 */
app.use('/playlist', playlist);

/**
 * Profile page
 */
app.use('/me', profile)


/**
 * Search result page
 */
app.use('/search', search)


/**
 * Artist page
 */
app.use('/artist', artist)

/**
 * Track page
 */
app.use('/track', track)

/**
 * 404 page
 */
app.use((req, res) => {
  res.render('./pages/404')
})

/**
 * Listen on port
 */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
