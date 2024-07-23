/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */
"use strict";

/**
 * custom modules
 */

const { getData } = require("../config/axios-config");
const { getUrlQeury } = require("../utils/helpers-util");


/**
 * 
 * @param {object} req
 * @returns {object} 
 */
const getSeveralDetail = async (req) => {
    const { offset, limit, page } = getUrlQeury(req.params)

    const { data: { categories } } = await getData(`browse/categories?offset=${offset}&limit=${limit}`, req.cookies.access_token);

    return {
        baseUrl: req.baseUrl, page, name: "Explore", ...categories
    }
}


/**
 * 
 * @param {Object} req
 * @returns {Object} 
 */
const getDetail = async (req) => {
    const { cotegoryId } = req.params
    const { data: catInfo } = await getData(`/browse/categories/${cotegoryId}`, req.cookies.access_token);

    return catInfo
}

module.exports = {
    getSeveralDetail,
    getDetail
}