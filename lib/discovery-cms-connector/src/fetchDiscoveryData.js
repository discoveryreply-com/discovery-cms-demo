import axios from 'axios';

/**
 * This function retrieves data under the content/ api sub path
 *
 * @param slug
 * @param context
 * @param options
 * @returns {object | null}
 */
async function fetchDiscoveryContentData(slug, context, options = {}) {
    return fetchDiscoveryData(slug, context, 'content/', options);
}

/**
 * This function retrieves data under the pages/ api sub path
 *
 * @param slug
 * @param context
 * @param options
 * @returns {object | null}
 */
async function fetchDiscoveryPageData(slug, context, options = {}) {
    return fetchDiscoveryData(slug, context, 'pages/', options);
}

/**
 * This function can be used in getStaticProps() to retrieve data for SSG
 *
 * @param slug
 * @param context
 * @param subPath api sub path
 * @param options
 * @returns {object | null}
 */
async function fetchDiscoveryData(slug, context, subPath, options) {
    let url = process.env.NEXT_PUBLIC_API_ROOT + subPath + slug;
    let params = {};

    if (context.token !== undefined) {
        params.token = context.token;

        if (context.cacheTstamp !== undefined) {
            params.cacheTstamp = context.cacheTstamp;
        }
    } else {
        params.token = process.env.NEXT_PUBLIC_PUBLIC_TOKEN;
    }

    params = {
        ...params,
        ...options,
    };

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

/**
 * This function retrieves data under the content/ api sub path using the discovery id
 *
 * @param discoveryId
 * @param context
 * @returns {object | null}
 */
async function fetchDiscoveryContentDataById(discoveryId, context) {
    return fetchDiscoveryDataById(discoveryId, 'content/', context);
}

/**
 * This function retrieves data under the pages/ api sub path using the discovery id
 *
 * @param discoveryId
 * @param context
 * @returns {object | null}
 */
async function fetchDiscoveryPageDataById(discoveryId, context) {
    return fetchDiscoveryDataById(discoveryId, 'pages/', context);
}

/**
 * This function retrieves data using the discovery id
 *
 * @param discoveryId
 * @param context
 * @param subPath
 * @returns {object | null}
 */
async function fetchDiscoveryDataById(discoveryId, context, subPath) {
    let url = process.env.NEXT_PUBLIC_API_ROOT + subPath + discoveryId;
    let params = {};

    if (context.token !== undefined) {
        params.token = context.token;
    } else {
        params.token = process.env.NEXT_PUBLIC_PUBLIC_TOKEN;
    }

    params.keyType = '_id';

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

export {
    fetchDiscoveryPageData,
    fetchDiscoveryContentData,
    fetchDiscoveryData,
    fetchDiscoveryContentDataById,
    fetchDiscoveryPageDataById,
    fetchDiscoveryDataById,
};
