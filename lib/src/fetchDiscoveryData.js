import axios from 'axios';
import { getDiscoveryCms } from './DiscoveryCms';

/**
 * This function can be used in getStaticProps() to retrieve data for SSG
 *
 * @param url
 * @param options
 * @returns {object | null}
 */
async function fetchDiscoveryData(url, options) {
    let params = generateQueryParams(options);

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

/**
 * This function retrieves data using the discovery id
 *
 * @param url
 * @param context
 * @param options
 * @returns {object | null}
 */
async function fetchDiscoveryDataById(url, context, options = {}) {
    const params = generateQueryParams(context, options);

    params.keyType = '_id';

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

function generateQueryParams(options) {
    let params = {};

    if (options.token) {
        params.token = options.token;
    } else {
        params.token = getDiscoveryCms().getToken();
    }

    params = {
        ...params,
        ...options,
    };

    return params;
}

export { fetchDiscoveryData, fetchDiscoveryDataById };
