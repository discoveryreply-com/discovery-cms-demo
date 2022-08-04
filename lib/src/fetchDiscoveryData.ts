import axios from 'axios';
import { DiscoveryRequestOptions } from './types';

/**
 * This function can be used in getStaticProps() to retrieve data for SSG
 *
 * @param {string} url
 * @param {DiscoveryRequestOptions} options
 * @returns {object | null}
 */
async function fetchDiscoveryData(url: string, options: DiscoveryRequestOptions = {}) {
    let params = generateQueryParams(options);

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

/**
 * This function retrieves data using the discovery id
 *
 * @param {string} url
 * @param {DiscoveryRequestOptions} options
 * @returns {object | null}
 */
async function fetchDiscoveryDataById(url: string, options: DiscoveryRequestOptions = {}) {
    const params = generateQueryParams(options);

    params.key_type = '_id';

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

function generateQueryParams(options: any) {
    let params: DiscoveryRequestOptions = {};

    if (options.token) {
        params.token = options.token;
    }

    params = {
        ...params,
        ...options,
    };

    return params;
}

export { fetchDiscoveryData, fetchDiscoveryDataById };
