import axios from 'axios';
import { DiscoveryRequestOptions } from './types';
import { AxiosError } from 'axios';
/**
 * This function can be used in getStaticProps() to retrieve data for SSG
 *
 * @param {string} url
 * @param {DiscoveryRequestOptions} options
 * @returns {object | null}
 */
async function fetchDiscoveryData(url: string, options: DiscoveryRequestOptions = {}) {
    let params = generateQueryParams(options);

    let discoveryData;

    try {
        discoveryData = await axios.get(url, { params });
    } catch (error) {
        const err = error as AxiosError;
        const errResponse = err.response ?? { status: 400, data: { error: 'Generic Api Error' } };
        throw new Error(`${errResponse.status}: ${errResponse.data.error}`);
    }

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

    let discoveryData;

    try {
        discoveryData = await axios.get(url, { params });
    } catch (error) {
        const err = error as AxiosError;
        throw new Error(`${err.code}: ${err.response?.data.error}`);
    }

    return discoveryData?.data;
}

function generateQueryParams(options: any) {
    let params: any = {};

    if (options.token) {
        params.token = options.token;
        delete options.token;
    }

    if (options.filters) {
        params.filters = [];

        for (const [key, value] of Object.entries(options.filters)) {
            let operator: RegExpMatchArray | string | null = key.match(/\[[^\]]*]/g);

            if (operator === null) {
                operator = '[eq]';
            } else {
                operator = operator[0];
            }

            const fieldName = key.replace(operator, '');

            params.filters.push(`[${fieldName}]${operator}[${value}]`);
        }

        delete options.filters;
    }

    params = {
        ...params,
        ...options,
    };

    return params;
}

export { fetchDiscoveryData, fetchDiscoveryDataById };
