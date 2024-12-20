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
export async function fetchDiscoveryData(url: string, options: DiscoveryRequestOptions = {}) {

    let params = generateQueryParams(options);

    const headers: Record<string, string> = {};
    // If authToken is present, set the Authorization header
    if (options.authToken) {
        headers['Authorization'] = `${options.authToken}`;
    }

    let discoveryData;

    try {
        // Pass the headers along with params in the axios request
        discoveryData = await axios.get(url, {
            params,
            headers,
            withCredentials: true
        });

    } catch (error) {
        const err = error as AxiosError<any>;
        const errResponse = (err.response ?? { status: 400, data: { error: 'Generic Api Error' }});
        throw new Error(`${errResponse.status}: ${errResponse.data.message}`);
    }

    return discoveryData?.data;
}

function generateQueryParams(options: any) {
    let params: any = {};
    
    const excludedParams = [
        "authToken"
    ]

    if (options.token) {
        params.token = options.token;
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
    }

    Object.keys(options).forEach(key => {
        const value = options[key];
        if (excludedParams.includes(key)){
            return;
        }
        params[key] = value;
    })

    return params;
}
