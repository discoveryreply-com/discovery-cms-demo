import { fetchDiscoveryData, fetchDiscoveryDataById } from './fetchDiscoveryData';
import DiscoveryContext from './DiscoveryContext';

let discoveryApi = null;

const useDiscoveryCms = () => {
    if (!discoveryApi) {
        console.error('The Discovery CMS has not be initialized.'); //TODO: add method call
    }

    return discoveryApi;
};

export { useDiscoveryCms as getDiscoveryCms };

export const setupDiscoveryCms = (options = {}) => {
    discoveryApi = setupDiscoveryConnector(options);
};

const setupDiscoveryConnector = (options) => {
    const discoveryApi = {};

    if (options.apiRoot) {
        discoveryApi.apiRoot = options.apiRoot;
    }

    if (options.apiToken) {
        discoveryApi.apiToken = options.apiToken;
    }

    if (options.components) {
        discoveryApi.components = options.components;
    }

    discoveryApi.getPage = async (slug, options = {}) => {
        let url = discoveryApi.apiRoot + 'pages/' + slug;

        if (options.token == null) {
            options.token = discoveryApi.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryData(url, options);
    };

    discoveryApi.getPageById = async (discoveryId, options = {}) => {
        let url = discoveryApi.apiRoot + 'pages/' + discoveryId;

        if (options.token == null) {
            options.token = discoveryApi.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryDataById(url, options);
    };

    discoveryApi.getContent = async (slug, options = {}) => {
        let url = discoveryApi.apiRoot + 'content/' + slug;

        if (options.token == null) {
            options.token = discoveryApi.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryData(url, options);
    };

    discoveryApi.getContentById = async (discoveryId, options = {}) => {
        let url = discoveryApi.apiRoot + 'content/' + discoveryId;

        if (options.token == null) {
            options.token = discoveryApi.apiToken;
        }

        options.children = 'details';

        return fetchDiscoveryDataById(url, options);
    };

    discoveryApi.getContext = () => {
        return DiscoveryContext;
    };

    discoveryApi.getComponents = () => {
        return discoveryApi.components;
    };

    discoveryApi.getToken = () => {
        return discoveryApi.apiToken;
    };

    return discoveryApi;
};
