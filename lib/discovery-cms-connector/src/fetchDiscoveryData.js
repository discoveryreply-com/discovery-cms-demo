import axios from 'axios';

/**
 * This function retrieves data under the content/ api sub path
 *
 * @param slug
 * @param context
 * @returns {object | null}
 */
async function fetchDiscoveryContentData(slug, context) {
    return fetchDiscoveryData(slug, context, 'content/');
}

/**
 * This function retrieves data under the pages/ api sub path
 *
 * @param slug
 * @param context
 * @returns {object | null}
 */
async function fetchDiscoveryPageData(slug, context) {
    return fetchDiscoveryData(slug, context, 'pages/');
}

/**
 * This function can be used in getStaticProps() to retrieve data for SSG
 *
 * @param slug
 * @param context
 * @param subPath api sub path
 * @returns {object | null}
 */
async function fetchDiscoveryData(slug, context, subPath) {
    let url = process.env.NEXT_PUBLIC_API_ROOT + subPath + slug;

    if (context.token !== undefined) {
        url += '?token=' + context.token;

        if (context.cacheTstamp !== undefined) {
            url += '&cacheTstamp=' + context.cacheTstamp;
        }
    } else {
        url += '?token=' + process.env.NEXT_PUBLIC_PUBLIC_TOKEN;
    }

    let discoveryData = await axios.get(url);
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

    if (context.token !== undefined) {
        url += '?token=' + context.token;
    } else {
        url += '?token=' + process.env.NEXT_PUBLIC_PUBLIC_TOKEN;
    }

    url += '&keyType=_id';

    let discoveryData = await axios.get(url);
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
