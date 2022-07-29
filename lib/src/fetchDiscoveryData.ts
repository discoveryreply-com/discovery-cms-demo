import axios from 'axios';
import { DiscoveryRequestOption } from './types';

/**
 * This function can be used in getStaticProps() to retrieve data for SSG
 *
 * @param {string} url
 * @param {DiscoveryRequestOption} options
 * @returns {object | null}
 */
async function fetchDiscoveryData(url: string, options: DiscoveryRequestOption = {}) {
    let params = generateQueryParams(options);

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

/**
 * This function retrieves data using the discovery id
 *
 * @param {string} url
 * @param {DiscoveryRequestOption} options
 * @returns {object | null}
 */
async function fetchDiscoveryDataById(url: string, options: DiscoveryRequestOption = {}) {
    const params = generateQueryParams(options);

    params.keyType = '_id';

    let discoveryData = await axios.get(url, { params });
    return discoveryData?.data;
}

function generateQueryParams(options: any) {
    let params: DiscoveryRequestOption = {};

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
