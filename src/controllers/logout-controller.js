/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";


const logout = async (req, res) => {
    res.clearCookie('access_token')
    res.clearCookie('refresh_token')
    res.redirect('/login')
    
}

module.exports = { logout }